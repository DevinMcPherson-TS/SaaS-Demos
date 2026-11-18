import Link from "next/link";

export default function NotFound() {
  return (
    <main id="content">
      <div className="shell missing">
        <p className="kicker">Missing page</p>
        <h1>That page is not on this site.</h1>
        <p className="lede">Try the rooms, the process, or an appointment request.</p>
        <Link className="button button-primary" href="/">
          Back to the studio
        </Link>
      </div>
    </main>
  );
}
