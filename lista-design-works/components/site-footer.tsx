import Link from "next/link";

const links = [
  { href: "/services", label: "Services" },
  { href: "/process", label: "Process" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/appointment", label: "Request an appointment" },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <p className="footer-brand">Lista Design Works</p>
          <p className="footer-copy">Residential interior design and remodeling.</p>
        </div>
        <nav aria-label="Footer" className="footer-nav">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="shell">
        <p className="placeholder-note">
          Room studies on this site are illustrations, not photographs of finished projects.
          Appointment requests are saved here. Nothing on this site takes payment.
        </p>
      </div>
    </footer>
  );
}
