"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  FIELD_LIMITS,
  PROJECT_TYPES,
  projectTypeLabel,
  validateAppointment,
  type AppointmentInput,
  type FieldErrors,
} from "@/lib/appointment-schema";

type Fields = {
  name: string;
  contact: string;
  preferredTime: string;
  projectType: string;
  note: string;
};

type Status = "editing" | "saving" | "saved" | "save-error";

const emptyFields: Fields = {
  name: "",
  contact: "",
  preferredTime: "",
  projectType: "",
  note: "",
};

const fieldOrder = ["name", "contact", "preferredTime", "projectType", "note"] as const;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function readErrors(value: unknown): FieldErrors | null {
  if (!isRecord(value) || !isRecord(value.errors)) return null;
  const errors: FieldErrors = {};
  for (const key of fieldOrder) {
    const message = value.errors[key];
    if (typeof message === "string" && message) errors[key] = message;
  }
  return Object.keys(errors).length > 0 ? errors : null;
}

function readMessage(value: unknown): string | null {
  if (!isRecord(value) || typeof value.message !== "string") return null;
  return value.message;
}

export function AppointmentForm() {
  const [fields, setFields] = useState<Fields>(emptyFields);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("editing");
  const [formError, setFormError] = useState<string | null>(null);
  const [reference, setReference] = useState<string | null>(null);
  const [saved, setSaved] = useState<AppointmentInput | null>(null);
  const successRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (status === "saved") successRef.current?.focus();
  }, [status]);

  function update(key: keyof Fields, value: string) {
    setFields((current) => ({ ...current, [key]: value }));
    setFormError(null);
    if (status === "save-error") setStatus("editing");
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormError(null);
    const result = validateAppointment(fields);
    if (!result.ok) {
      setErrors(result.errors);
      setStatus("editing");
      const first = fieldOrder.find((key) => result.errors[key]);
      if (first) document.getElementById(first)?.focus();
      return;
    }

    setErrors({});
    setStatus("saving");
    try {
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.value),
      });
      const payload: unknown = await response.json().catch(() => null);
      if (response.ok && isRecord(payload) && payload.ok === true && typeof payload.reference === "string") {
        setSaved(result.value);
        setReference(payload.reference);
        setStatus("saved");
        return;
      }
      const fieldErrors = readErrors(payload);
      if (fieldErrors) {
        setErrors(fieldErrors);
        setStatus("editing");
        const first = fieldOrder.find((key) => fieldErrors[key]);
        if (first) document.getElementById(first)?.focus();
        return;
      }
      setFormError(readMessage(payload) ?? "We couldn't save your request. Please try again.");
      setStatus("save-error");
    } catch {
      setFormError("We couldn't save your request. Please try again.");
      setStatus("save-error");
    }
  }

  function reset() {
    setFields(emptyFields);
    setErrors({});
    setFormError(null);
    setReference(null);
    setSaved(null);
    setStatus("editing");
  }

  if (status === "saved" && saved && reference) {
    return (
      <section className="success-panel" aria-live="polite">
        <p className="kicker">Request saved</p>
        <h2 id="request-saved" ref={successRef} tabIndex={-1}>
          Your appointment request is saved.
        </h2>
        <p>
          Reference <strong>{reference}</strong>. It is stored with Lista Design Works. Nothing is
          emailed, scheduled, or charged.
        </p>
        <dl className="saved-summary">
          <div>
            <dt>Name</dt>
            <dd>{saved.name}</dd>
          </div>
          <div>
            <dt>Contact</dt>
            <dd>{saved.contact}</dd>
          </div>
          <div>
            <dt>Preferred time</dt>
            <dd>{saved.preferredTime}</dd>
          </div>
          <div>
            <dt>Project</dt>
            <dd>{projectTypeLabel(saved.projectType)}</dd>
          </div>
          {saved.note ? (
            <div>
              <dt>Note</dt>
              <dd>{saved.note}</dd>
            </div>
          ) : null}
        </dl>
        <button type="button" className="button button-secondary" onClick={reset}>
          Send another request
        </button>
      </section>
    );
  }

  const alertMessage = formError ?? (Object.keys(errors).length > 0 ? "Please fix the highlighted fields." : null);

  return (
    <form className="form-card" onSubmit={onSubmit} noValidate>
      {alertMessage ? (
        <p className={formError ? "form-alert form-alert-error" : "form-alert"} role="alert">
          {alertMessage}
        </p>
      ) : null}

      <div className={errors.name ? "field has-error" : "field"}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          autoComplete="name"
          maxLength={FIELD_LIMITS.name}
          value={fields.name}
          aria-invalid={errors.name ? true : undefined}
          aria-describedby={errors.name ? "name-error" : undefined}
          onChange={(event) => update("name", event.target.value)}
        />
        {errors.name ? (
          <p id="name-error" className="field-error">
            {errors.name}
          </p>
        ) : null}
      </div>

      <div className={errors.contact ? "field has-error" : "field"}>
        <label htmlFor="contact">Email or phone</label>
        <p id="contact-hint" className="field-hint">
          An email address or a phone number.
        </p>
        <input
          id="contact"
          name="contact"
          autoComplete="on"
          maxLength={FIELD_LIMITS.contact}
          value={fields.contact}
          aria-invalid={errors.contact ? true : undefined}
          aria-describedby={errors.contact ? "contact-hint contact-error" : "contact-hint"}
          onChange={(event) => update("contact", event.target.value)}
        />
        {errors.contact ? (
          <p id="contact-error" className="field-error">
            {errors.contact}
          </p>
        ) : null}
      </div>

      <div className={errors.preferredTime ? "field has-error" : "field"}>
        <label htmlFor="preferredTime">Preferred time</label>
        <p id="time-hint" className="field-hint">
          A day, a time of day, or a window that works.
        </p>
        <input
          id="preferredTime"
          name="preferredTime"
          autoComplete="off"
          placeholder="Tuesday mornings, or Thursday after 4"
          maxLength={FIELD_LIMITS.preferredTime}
          value={fields.preferredTime}
          aria-invalid={errors.preferredTime ? true : undefined}
          aria-describedby={errors.preferredTime ? "time-hint time-error" : "time-hint"}
          onChange={(event) => update("preferredTime", event.target.value)}
        />
        {errors.preferredTime ? (
          <p id="time-error" className="field-error">
            {errors.preferredTime}
          </p>
        ) : null}
      </div>

      <div className={errors.projectType ? "field has-error" : "field"}>
        <label htmlFor="projectType">Project type</label>
        <select
          id="projectType"
          name="projectType"
          value={fields.projectType}
          aria-invalid={errors.projectType ? true : undefined}
          aria-describedby={errors.projectType ? "project-error" : undefined}
          onChange={(event) => update("projectType", event.target.value)}
        >
          <option value="">Select a project type</option>
          {PROJECT_TYPES.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
        {errors.projectType ? (
          <p id="project-error" className="field-error">
            {errors.projectType}
          </p>
        ) : null}
      </div>

      <div className={errors.note ? "field has-error" : "field"}>
        <label htmlFor="note">Note</label>
        <p id="note-hint" className="field-hint">
          Optional. What should the studio know about the room?
        </p>
        <textarea
          id="note"
          name="note"
          rows={4}
          maxLength={FIELD_LIMITS.note}
          value={fields.note}
          aria-invalid={errors.note ? true : undefined}
          aria-describedby={errors.note ? "note-hint note-error" : "note-hint"}
          onChange={(event) => update("note", event.target.value)}
        />
        <p className="field-count">
          {fields.note.length} / {FIELD_LIMITS.note}
        </p>
        {errors.note ? (
          <p id="note-error" className="field-error">
            {errors.note}
          </p>
        ) : null}
      </div>

      <button type="submit" className="button button-primary" disabled={status === "saving"}>
        {status === "saving" ? "Saving request…" : "Request appointment"}
      </button>
    </form>
  );
}
