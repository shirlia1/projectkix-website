import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Logo } from "./Logo";

type NavLink = { to: string; label: string; hasChevron?: boolean };
const links: NavLink[] = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/blogs", label: "Blogs" },
  { to: "/partners", label: "Our Partners", hasChevron: true },
  { to: "/impact-fundraising", label: "Impact & Fundraising" },
  { to: "/contact", label: "Contact Us" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 pt-4 px-4">
      <div className="max-w-6xl mx-auto card-soft px-5 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center" aria-label="ProjectKix home">
          <Logo />
        </Link>
        <nav className="hidden lg:flex items-center gap-6">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="nav-link inline-flex items-center gap-1" activeOptions={{ exact: l.to === "/" }}>
              {l.label}
              {l.hasChevron && <ChevronDown size={14} />}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Link to="/contribute" className="btn-black">Contribute Sneakers</Link>
        </div>
        <button
          className="lg:hidden p-2 rounded-full text-ink"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden max-w-6xl mx-auto card-soft mt-2 p-4 flex flex-col gap-3">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="nav-link" onClick={() => setOpen(false)} activeOptions={{ exact: l.to === "/" }}>
              {l.label}
            </Link>
          ))}
          <Link to="/contribute" className="btn-black self-start" onClick={() => setOpen(false)}>Contribute Sneakers</Link>
        </div>
      )}
    </header>
  );
}
