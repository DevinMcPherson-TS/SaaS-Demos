import type { Metadata } from "next";
import { AppointmentForm } from "@/components/appointment-form";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "Request an appointment",
  description: "Request an appointment with Lista Design Works. No payment is taken on this site.",
};

export default function AppointmentPage() {
  return (
    <main id="content">
      <div className="shell appointment-layout">
        <div>
          <PageIntro
            kicker="Appointments"
            title="Tell us about the room."
            lede="Leave your name, a way to reach you, a time that works, the kind of project, and a short note if you want one."
          />
          <ol className="expect">
            <li>The form checks that the request is complete.</li>
            <li>A reference code confirms it was stored on this site.</li>
            <li>Nothing is emailed, added to a calendar, or charged.</li>
          </ol>
        </div>
        <AppointmentForm />
      </div>
    </main>
  );
}
