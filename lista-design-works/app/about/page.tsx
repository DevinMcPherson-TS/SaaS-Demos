import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "About",
  description: "About Lista Design Works, a residential interior design and remodeling studio.",
};

const principles = [
  {
    title: "Lived-in first",
    text: "The house is already someone’s week. The work should make that week easier, not ask the house to behave like a photograph.",
  },
  {
    title: "Fewer, clearer choices",
    text: "A small palette, a plan, and the decisions that change how a room works. Not a catalog of finishes with no point of view.",
  },
  {
    title: "The remodel stays in the conversation",
    text: "Design that disappears at demolition is only a drawing. The studio’s scope includes staying with the work.",
  },
];

export default function AboutPage() {
  return (
    <main id="content">
      <div className="shell">
        <PageIntro
          kicker="About"
          title="A studio for houses that are already home."
          lede="Lista Design Works is a residential practice for people who want the design and the remodeling to belong to the same conversation."
        />
        <div className="about-grid">
          <div>
            <p className="lede">
              The work is rooms in existing houses: a kitchen that can take a weekday, a bath with
              kinder light, a place to sit that gets the afternoon. The aim is a room that feels
              settled once the dust is gone.
            </p>
            <div className="about-note">
              <h2>How a project starts</h2>
              <p className="mt-sm">
                An appointment request is the first note: your name, a way to reach you, a time that
                works, and the kind of room. Requests are saved with Lista Design Works. Nothing on
                this site takes payment. The room studies are illustrations until photographs of
                finished work are added.
              </p>
            </div>
          </div>
          <div className="principles">
            {principles.map((item) => (
              <article key={item.title} className="principle">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
        <p className="section-link section-end">
          <Link className="text-link" href="/appointment">
            Request an appointment
          </Link>
        </p>
      </div>
    </main>
  );
}
