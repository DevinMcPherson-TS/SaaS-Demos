import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { RoomArt } from "@/components/room-art";
import { studies } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Illustrated room studies for Lista Design Works, a residential design and remodeling studio.",
};

export default function PortfolioPage() {
  return (
    <main id="content">
      <div className="shell">
        <PageIntro
          kicker="Portfolio"
          title="Rooms the studio is built for."
          lede="Illustrated studies of the rooms Lista Design Works takes on: kitchens, baths, and the quieter rooms between them. These drawings are not photographs of finished client work."
        />
        <div className="gallery section-end mt-md">
          {studies.map((study) => (
            <figure key={study.variant} className="study">
              <RoomArt variant={study.variant} />
              <figcaption>
                <span className="caption-title">{study.title}</span>
                <span>{study.summary}</span>
                <span className="caption-meta">{study.materials.join(" · ")}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </main>
  );
}
