import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

type NavLink = { to: string; label: string };
const links: NavLink[] = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/blogs", label: "Blogs" },
  { to: "/partners", label: "Our Partners" },
  { to: "/impact-fundraising", label: "Impact & Fundraising" },
  { to: "/contact", label: "Contact Us" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 pt-4 px-4">
      <div className="max-w-6xl mx-auto card-soft px-5 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center" aria-label="ProjectKix home">
          <Logo />
        </Link>
        <nav className="hidden lg:flex items-center gap-6" aria-label="Primary">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="nav-link" activeOptions={{ exact: l.to === "/" }}>
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Link to="/contribute" className="btn-black">Contribute Sneakers</Link>
        </div>
        <button
          type="button"
          className="lg:hidden p-2 rounded-full text-ink focus-visible:outline focus-visible:outline-3 focus-visible:outline-brand"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="lg:hidden max-w-6xl mx-auto card-soft mt-2 p-4 flex flex-col gap-3"
        >
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="nav-link" onClick={() => setOpen(false)} activeOptions={{ exact: l.to === "/" }}>
              {l.label}
            </Link>
          ))}
          <Link to="/contribute" className="btn-black self-start" onClick={() => setOpen(false)}>Contribute Sneakers</Link>
        </nav>
      )}
    </header>
  );
}
