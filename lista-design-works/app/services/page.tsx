import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { services } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Services",
  description: "Interior design and remodeling services from Lista Design Works.",
};

export default function ServicesPage() {
  return (
    <main id="content">
      <div className="shell">
        <PageIntro
          kicker="Services"
          title="What the studio takes on."
          lede="Design and remodeling for existing houses. One room, a suite, or a sequence that has to stay livable while it changes."
        />
        <div>
          {services.map((service) => (
            <article key={service.id} id={service.id} className="service-row">
              <h2>{service.title}</h2>
              <div>
                <p>{service.summary}</p>
                <ul>
                  {service.includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
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
