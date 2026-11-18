export const PROJECT_TYPES = [
  { value: "kitchen", label: "Kitchen remodel" },
  { value: "bath", label: "Bath remodel" },
  { value: "whole-home", label: "Whole-home refresh" },
  { value: "living", label: "Living and dining" },
  { value: "bedroom", label: "Bedroom or suite" },
  { value: "consultation", label: "Design consultation" },
  { value: "unsure", label: "Not sure yet" },
] as const;

export type ProjectType = (typeof PROJECT_TYPES)[number]["value"];

export const FIELD_LIMITS = {
  name: 80,
  contact: 120,
  preferredTime: 120,
  note: 500,
} as const;

export type AppointmentInput = {
  name: string;
  contact: string;
  preferredTime: string;
  projectType: ProjectType;
  note: string;
};

export type AppointmentField = keyof AppointmentInput;
export type FieldErrors = Partial<Record<AppointmentField, string>>;

const PROJECT_TYPE_VALUES = new Set<string>(PROJECT_TYPES.map((item) => item.value));
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const LETTER_PATTERN = /[a-z]/i;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function asText(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function isProjectType(value: string): value is ProjectType {
  return PROJECT_TYPE_VALUES.has(value);
}

function isContact(value: string): boolean {
  if (value.includes("@")) return EMAIL_PATTERN.test(value);
  if (LETTER_PATTERN.test(value)) return false;
  const digits = value.replace(/\D/g, "");
  return digits.length >= 7 && digits.length <= 15;
}

export function projectTypeLabel(value: string): string {
  return PROJECT_TYPES.find((item) => item.value === value)?.label ?? value;
}

export function validateAppointment(
  body: unknown,
): { ok: true; value: AppointmentInput } | { ok: false; errors: FieldErrors } {
  const source = isRecord(body) ? body : {};
  const name = asText(source.name);
  const contact = asText(source.contact);
  const preferredTime = asText(source.preferredTime);
  const projectType = asText(source.projectType);
  const note = asText(source.note);
  const errors: FieldErrors = {};

  if (name.length < 2) errors.name = "Enter your name.";
  else if (name.length > FIELD_LIMITS.name) errors.name = "Use 80 characters or fewer.";

  if (!contact) errors.contact = "Enter an email address or phone number.";
  else if (contact.length > FIELD_LIMITS.contact) errors.contact = "Use 120 characters or fewer.";
  else if (!isContact(contact)) {
    errors.contact = "Use an email address or a phone number with at least 7 digits.";
  }

  if (!preferredTime) errors.preferredTime = "Tell us a preferred time.";
  else if (preferredTime.length > FIELD_LIMITS.preferredTime) {
    errors.preferredTime = "Use 120 characters or fewer.";
  }

  if (!isProjectType(projectType)) errors.projectType = "Choose a project type.";

  if (note.length > FIELD_LIMITS.note) errors.note = "Keep the note under 500 characters.";

  if (Object.keys(errors).length > 0 || !isProjectType(projectType)) {
    return { ok: false, errors };
  }

  return {
    ok: true,
    value: { name, contact, preferredTime, projectType, note },
  };
}
