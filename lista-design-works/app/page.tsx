import type { Metadata } from "next";
import Link from "next/link";
import { RoomArt } from "@/components/room-art";
import { materials, processSteps, reasons, services, studies } from "@/lib/site-content";

export const metadata: Metadata = {
  title: { absolute: "Lista Design Works — Residential design and remodeling" },
  description:
    "Lista Design Works designs and remodels residential interiors. See the services, the process, room studies, and request an appointment.",
};

export default function HomePage() {
  const featured = studies.slice(0, 3);
  const previewSteps = processSteps.slice(0, 4);

  return (
    <main id="content">
      <div className="shell">
        <section className="hero">
          <div>
            <p className="kicker">Residential design and remodeling</p>
            <h1>A house that feels settled.</h1>
            <p className="lede mt-md">
              Lista Design Works plans and remodels the rooms you actually live in. Kitchens, baths,
              and the spaces between them — designed, specified, and carried through as one piece of work.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/appointment">
                Request an appointment
              </Link>
              <Link className="button button-secondary" href="/portfolio">
                View room studies
              </Link>
            </div>
          </div>
          <figure className="hero-frame">
            <RoomArt variant="living" />
            <figcaption>Living room study · plaster, oak, linen</figcaption>
          </figure>
        </section>
        <ul className="swatches" aria-label="Materials the studio works with">
          {materials.map((item) => (
            <li key={item.name}>
              <span className={`swatch ${item.swatch}`} aria-hidden="true" />
              {item.name}
            </li>
          ))}
        </ul>
      </div>

      <section className="band" aria-labelledby="why-heading">
        <div className="shell">
          <header className="section-intro">
            <p className="kicker">Why people hire them</p>
            <h2 id="why-heading">One studio, from the first visit to the walkthrough.</h2>
          </header>
          <ol className="reasons">
            {reasons.map((reason) => (
              <li key={reason.number} className="reason">
                <span className="reason-index">{reason.number}</span>
                <h3>{reason.title}</h3>
                <p>{reason.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <div className="shell">
        <section className="section" aria-labelledby="services-heading">
          <header className="section-intro">
            <p className="kicker">Services</p>
            <h2 id="services-heading">Rooms, and the work it takes to change them.</h2>
            <p className="lede">
              Design and remodeling for houses that are already lived in. Start with one room or a
              sequence of them.
            </p>
          </header>
          <div className="service-grid">
            {services.map((service) => (
              <Link key={service.id} className="service-card" href={`/services#${service.id}`}>
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
              </Link>
            ))}
          </div>
          <p className="section-link">
            <Link className="text-link" href="/services">
              Read the services
            </Link>
          </p>
        </section>

        <section className="section" aria-labelledby="process-heading">
          <header className="section-intro">
            <p className="kicker">Process</p>
            <h2 id="process-heading">A visible order of work.</h2>
          </header>
          <ol className="steps">
            {previewSteps.map((step) => (
              <li key={step.number} className="step">
                <span className="step-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.studio}</p>
              </li>
            ))}
          </ol>
          <p className="section-link">
            <Link className="text-link" href="/process">
              See the full process
            </Link>
          </p>
        </section>

        <section className="section" aria-labelledby="work-heading">
          <header className="section-intro">
            <p className="kicker">Portfolio</p>
            <h2 id="work-heading">Room studies, not a client list.</h2>
            <p className="lede">
              Illustrated rooms that show the kind of work the studio is for. They are drawings,
              not photographs of finished projects.
            </p>
          </header>
          <div className="gallery">
            {featured.map((study) => (
              <Link key={study.variant} href="/portfolio" className="study">
                <RoomArt variant={study.variant} />
                <figcaption>
                  <span className="caption-title">{study.title}</span>
                  <span className="caption-meta">{study.materials.join(" · ")}</span>
                </figcaption>
              </Link>
            ))}
          </div>
          <p className="section-link">
            <Link className="text-link" href="/portfolio">
              Open the portfolio
            </Link>
          </p>
        </section>
      </div>

      <section className="closing">
        <div className="shell closing-inner">
          <div>
            <p className="kicker">Appointment</p>
            <h2>Tell us about the room.</h2>
            <p className="lede mt-sm">
              Share a name, a way to reach you, a time that works, and the kind of project. The
              request is saved here. Nothing is charged.
            </p>
          </div>
          <div className="closing-actions">
            <Link className="button button-light" href="/appointment">
              Request an appointment
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
