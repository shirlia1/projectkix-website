import { Link } from "@tanstack/react-router";
import { Facebook, Instagram } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-white/80 mt-24">
      <div className="max-w-6xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <div className="bg-white inline-block px-3 py-2 rounded-xl"><Logo /></div>
          <p className="mt-4 text-sm text-white/60 max-w-xs">
            Turning unwanted sneakers into funds for disabled athletes, charities, and a greener planet.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-brand">Home</Link></li>
            <li><Link to="/about" className="hover:text-brand">About Us</Link></li>
            <li><Link to="/blogs" className="hover:text-brand">Blogs</Link></li>
            <li><Link to="/partners" className="hover:text-brand">Our Partners</Link></li>
            <li><Link to="/impact-fundraising" className="hover:text-brand">Impact & Fundraising</Link></li>
            <li><Link to="/contact" className="hover:text-brand">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Follow</h4>
          <div className="flex gap-3">
            <a href="https://www.instagram.com/projectkixsneakers/" target="_blank" rel="noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/10 hover:bg-brand inline-flex items-center justify-center transition"><Instagram size={18} /></a>
            <a href="https://www.facebook.com/ProjectKixSneakers/" target="_blank" rel="noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full bg-white/10 hover:bg-brand inline-flex items-center justify-center transition"><Facebook size={18} /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-5 text-xs text-white/50 flex flex-wrap justify-between gap-2">
          <span>© {year} ProjectKix. All rights reserved.</span>
          <span>Made with love for athletes everywhere.</span>
        </div>
      </div>
    </footer>
  );
}
