import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Recycle, HeartHandshake, Wallet, Globe, Facebook, Instagram, Package, ShoppingBag, Truck } from "lucide-react";
import { canonical } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ProjectKix — Your Unwanted Sneakers Can Help Raise Funds & Change Lives" },
      { name: "description", content: "ProjectKix turns your old sneakers into funds for charities, organizations and disabled athletes — while keeping waste out of landfills." },
    ],
    links: canonical("/"),
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section className="px-4 pt-10 pb-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-extrabold text-ink leading-[1.05] text-4xl sm:text-5xl lg:text-6xl tracking-tight">
              Your Unwanted Sneakers Can <span className="text-brand">Help Raise Funds</span> & Change Lives
            </h1>
            <p className="mt-6 text-body text-lg max-w-xl">
              Give your unwanted sneakers a second chance. At ProjectKix we turn your old footwear into funds for your company, organization, affiliation, or charity of your choice, while keeping waste out of landfills. It's simple: your sneakers create opportunities for people in need, support global causes, or boost your income.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href="https://www.facebook.com/ProjectKixSneakers/" target="_blank" rel="noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full bg-white card-soft inline-flex items-center justify-center text-ink hover:text-brand"><Facebook size={18} /></a>
              <a href="https://www.instagram.com/projectkixsneakers/" target="_blank" rel="noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white card-soft inline-flex items-center justify-center text-ink hover:text-brand"><Instagram size={18} /></a>
            </div>
            <div className="mt-8">
              <Link to="/contribute" className="btn-red">Get started <ArrowRight size={18} /></Link>
            </div>
          </div>
          <HeroIllustration />
        </div>
      </section>

      {/* WHY EXISTS */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ink">Why Project Kix Exists</h2>
          <p className="mt-5 text-body text-lg">
            ProjectKix makes it socially and financially rewarding to join the circular economy. We provide free recycling programs for individuals and organizations, making it easy to turn sneakers into funds, resources, and opportunities.
          </p>
          <Link to="/about" className="btn-red mt-8">Learn More</Link>
        </div>
      </section>

      {/* BANNER + CARDS */}
      <section className="relative">
        <div className="relative h-[420px] sm:h-[460px] bg-ink overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-40"
            style={{ backgroundImage: "url('/hero.webp')" }}
          />
          <div className="relative max-w-4xl mx-auto h-full flex flex-col justify-center items-center text-center px-6 text-white">
            <h2 className="text-3xl sm:text-5xl font-extrabold">A Simple Way to Make a Big Impact</h2>
            <p className="mt-4 text-lg font-semibold max-w-2xl">Together, we're creating a sustainable future — one pair of sneakers at a time.</p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4 -mt-24 relative z-10 grid md:grid-cols-3 gap-6">
          {[
            { icon: Recycle, title: "Go Green", desc: "Keep sneakers out of landfills and reduce waste." },
            { icon: HeartHandshake, title: "Support Charities", desc: "Fund adaptive sports programs, local non-profits, or global initiatives." },
            { icon: Wallet, title: "Earn Money", desc: "Find opportunities for people to contribute their sneakers." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="card-soft overflow-hidden">
              <div className="bg-brand py-8 flex justify-center">
                <Icon size={48} className="text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-ink">{title}</h3>
                <p className="mt-2 text-body">{desc}</p>
                <Link to="/about" className="mt-4 inline-flex items-center gap-1 text-brand font-semibold hover:gap-2 transition-all">→ Read more</Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/contribute" className="btn-red">Request a bag</Link>
        </div>
      </section>

      {/* OUR WHY */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-ink">Our Why</h2>
            <div className="mt-8 space-y-8">
              <Block title="Our Mission" body="At ProjectKix, we're on a mission to give unwanted sneakers a second chance — creating a sustainable future and empowering communities. By recycling sneakers, we provide funding for adaptive sports programs, support local charities, and reduce landfill waste." />
              <Block title="Our Story" body="Born from a passion for adaptive sports, ProjectKix started as a small initiative to support disabled athletes. Today, we've expanded to help organizations of all kinds while promoting sustainability and social impact." />
              <Block title="A Greener Future, One Sneaker at a Time" body="Did you know sneakers can take up to 40 years to decompose in landfills? By recycling with ProjectKix, you're reducing waste, lowering CO2 emissions, and contributing to a circular economy." />
            </div>
            <Link to="/about" className="btn-red mt-8">Learn More</Link>
          </div>
          <div className="grid gap-5">
            {[
              { src: "/gallery/booth.webp", alt: "ProjectKix donation booth at LA Fitness", w: 1200, h: 1600 },
              { src: "/gallery/champions.webp", alt: "NWBA wheelchair basketball championship team", w: 1200, h: 1087 },
              { src: "/gallery/lafitness.webp", alt: "ProjectKix team with LA Fitness staff", w: 998, h: 1236 },
              { src: "/gallery/warriors.webp", alt: "Wounded Warrior athletes", w: 1200, h: 1246 },
              { src: "/gallery/certificate.webp", alt: "Certificate of appreciation presentation", w: 970, h: 1222 },
            ].map(({ src, alt, w, h }, i) => (
              <div key={i} className="overflow-hidden rounded-3xl card-soft bg-white">
                <img src={src} alt={alt} width={w} height={h} className="w-full h-auto object-contain" loading="lazy" decoding="async" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 STEPS */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ink">3 Simple Steps to Make a Difference</h2>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { icon: Package, title: "Request a bag", desc: "Create a ProjectKix account and request a free prepaid mailing bag." },
              { icon: ShoppingBag, title: "Fill it up", desc: "Fill the bag with up to 7 pairs of wearable sneakers." },
              { icon: Truck, title: "Drop and forget", desc: "Any FedEx location works. We take it from there." },
            ].map(({ icon: Icon, title, desc }, i) => (
              <div key={title} className="card-soft p-8 text-left">
                <div className="w-16 h-16 rounded-full bg-brand/10 flex items-center justify-center text-brand">
                  <Icon size={32} />
                </div>
                <div className="mt-4 text-sm font-bold text-brand">STEP {i + 1}</div>
                <h3 className="mt-1 text-xl font-bold text-ink">{title}</h3>
                <p className="mt-2 text-body">{desc}</p>
              </div>
            ))}
          </div>
          <Link to="/contribute" className="btn-red mt-12">Request a bag</Link>
        </div>
      </section>
    </div>
  );
}

function Block({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <h3 className="text-xl font-bold text-brand">{title}</h3>
      <p className="mt-2 text-body">{body}</p>
    </div>
  );
}

function HeroIllustration() {
  const items = [
    { icon: Wallet, label: "Raise Funds" },
    { icon: Recycle, label: "Recycle" },
    { icon: HeartHandshake, label: "Reuse" },
    { icon: Globe, label: "Global" },
  ];
  return (
    <div className="relative">
      <div className="aspect-square max-w-md mx-auto card-soft bg-gradient-to-br from-brand/10 to-white p-8 flex flex-col items-center">
        <div className="text-7xl">🎒</div>
        <div className="mt-2 text-sm font-bold tracking-widest text-ink">PROJECTKIX BAG</div>
        <div className="my-4 w-1 h-12 bg-brand rounded-full" />
        <div className="grid grid-cols-2 gap-4 w-full">
          {items.map(({ icon: Icon, label }) => (
            <div key={label} className="bg-white rounded-2xl p-4 flex flex-col items-center shadow-sm">
              <div className="w-10 h-10 rounded-full bg-brand text-white flex items-center justify-center"><Icon size={20} /></div>
              <div className="mt-2 text-xs font-bold text-ink">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
