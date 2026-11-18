import { NextResponse } from "next/server";
import { validateAppointment } from "@/lib/appointment-schema";
import { createAppointment } from "@/lib/appointment-store";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Could not read that request." },
      { status: 400 },
    );
  }

  const result = validateAppointment(body);
  if (!result.ok) {
    return NextResponse.json({ ok: false, errors: result.errors }, { status: 422 });
  }

  try {
    const saved = await createAppointment(result.value);
    return NextResponse.json({ ok: true, id: saved.id, reference: saved.reference });
  } catch (error) {
    console.error("Failed to store appointment request", error);
    return NextResponse.json(
      { ok: false, message: "We couldn't save your request. Please try again." },
      { status: 500 },
    );
  }
}
