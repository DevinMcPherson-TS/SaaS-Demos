import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { processSteps } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Process",
  description: "How a Lista Design Works project moves from the first conversation to the walkthrough.",
};

export default function ProcessPage() {
  return (
    <main id="content">
      <div className="shell">
        <PageIntro
          kicker="Process"
          title="Six steps, in an order you can follow."
          lede="The studio names what happens next before demolition. You always know which part belongs to the design, and which part is yours."
        />
        <ol className="timeline">
          {processSteps.map((step) => (
            <li key={step.number} className="timeline-item">
              <span className="timeline-number">{step.number}</span>
              <div className="timeline-body">
                <h2>{step.title}</h2>
                <p>
                  <span className="who">Studio · </span>
                  {step.studio}
                </p>
                <p>
                  <span className="who">You · </span>
                  {step.homeowner}
                </p>
              </div>
            </li>
          ))}
        </ol>
        <p className="section-link section-end">
          <Link className="text-link" href="/appointment">
            Request a conversation
          </Link>
        </p>
      </div>
    </main>
  );
}
