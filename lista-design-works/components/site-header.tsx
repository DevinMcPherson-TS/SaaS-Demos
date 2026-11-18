"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/services", label: "Services" },
  { href: "/process", label: "Process" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpenPath(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="site-header">
      <div className="shell header-bar">
        <Link href="/" className="wordmark">
          <span>
            <span className="wordmark-name">Lista</span>
            <span className="wordmark-studio">Design Works</span>
          </span>
        </Link>
        <nav id="site-nav" className={open ? "nav is-open" : "nav"} aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
          <Link className="nav-cta" href="/appointment">
            Request a visit
          </Link>
        </nav>
        <div className="header-actions">
          <Link className="button button-primary header-cta" href="/appointment">
            <span className="cta-long">Request a visit</span>
            <span className="cta-short">Visit</span>
          </Link>
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="site-nav"
            onClick={() => setOpenPath(open ? null : pathname)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>
    </header>
  );
}
