import { Link } from "@tanstack/react-router";
import { Footprints, PackagePlus, Handshake, Mail, ArrowRight } from "lucide-react";
import { Reveal } from "../motion/Reveal";

const ways = [
  { to: "/contribute", icon: Footprints, title: "Donate shoes", desc: "Request a free prepaid bag and send up to 7 pairs." },
  { to: "/contact", icon: PackagePlus, title: "Host a donation box", desc: "Place a ProjectKix box at your gym, office or school." },
  { to: "/partners", icon: Handshake, title: "Become a partner", desc: "Run a branded drive and fund the cause you choose." },
  { to: "/contact", icon: Mail, title: "Contact us", desc: "Questions? We answer within 2 business days." },
] as const;

export function GetInvolved() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center max-w-2xl mx-auto">
          <p className="text-brand font-bold uppercase tracking-widest text-sm">Get involved</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-ink">Find the way that fits you</h2>
          <p className="mt-4 text-body">Individuals, teams and companies all have a place here — pick a starting point below.</p>
        </Reveal>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ways.map(({ to, icon: Icon, title, desc }, i) => (
            <Reveal key={title} delay={i * 0.08} className="h-full">
              <Link
                to={to}
                className="group card-soft card-hover p-6 flex flex-col h-full focus-visible:outline focus-visible:outline-3 focus-visible:outline-brand focus-visible:outline-offset-2"
              >
                <div className="w-12 h-12 rounded-full bg-brand/10 text-brand flex items-center justify-center transition-colors group-hover:bg-brand group-hover:text-white">
                  <Icon size={22} />
                </div>
                <h3 className="mt-4 text-lg font-bold text-ink">{title}</h3>
                <p className="mt-2 text-body text-sm flex-1">{desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-brand font-semibold text-sm">
                  Start
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
