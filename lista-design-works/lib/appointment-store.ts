import { randomUUID } from "crypto";
import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";
import type { AppointmentInput } from "@/lib/appointment-schema";

export type StoredAppointment = AppointmentInput & {
  id: string;
  reference: string;
  createdAt: string;
};

const dataDirectory = path.join(process.cwd(), "data");
const storePath = path.join(dataDirectory, "appointments.json");

let writeQueue: Promise<unknown> = Promise.resolve();

function enqueue<T>(task: () => Promise<T>): Promise<T> {
  const run = writeQueue.then(task, task);
  writeQueue = run.then(
    () => undefined,
    () => undefined,
  );
  return run;
}

function isNodeError(error: unknown): error is NodeJS.ErrnoException {
  return error instanceof Error && "code" in error;
}

async function readAll(): Promise<StoredAppointment[]> {
  try {
    const raw = await readFile(storePath, "utf8");
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      throw new Error("Appointment store is not a list.");
    }
    return parsed as StoredAppointment[];
  } catch (error) {
    if (isNodeError(error) && error.code === "ENOENT") return [];
    throw error;
  }
}

export function createAppointment(input: AppointmentInput): Promise<StoredAppointment> {
  return enqueue(async () => {
    await mkdir(dataDirectory, { recursive: true });
    const existing = await readAll();
    const id = randomUUID();
    const record: StoredAppointment = {
      ...input,
      id,
      reference: `LDW-${id.slice(0, 8).toUpperCase()}`,
      createdAt: new Date().toISOString(),
    };
    existing.push(record);
    await writeFile(storePath, `${JSON.stringify(existing, null, 2)}\n`, "utf8");
    return record;
  });
}
