// Blog content for ProjectKix. Plain data so it renders without a markdown
// dependency and stays easy to edit. Reading time is derived from the body.

export type FAQ = { q: string; a: string };

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export type Article = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: string;
  date: string; // ISO yyyy-mm-dd
  excerpt: string;
  body: Block[];
  faqs: FAQ[];
};

export const categories = [
  "Shoe Donations",
  "Recycling & Sustainability",
  "Adaptive Sports",
  "Partnerships",
  "Community",
  "Corporate Responsibility",
] as const;

export const articles: Article[] = [
  {
    slug: "how-shoe-donations-create-impact",
    title: "How Shoe Donations Create Real Impact",
    metaTitle: "How Shoe Donations Create Real Impact | ProjectKix",
    metaDescription:
      "Your unworn sneakers can fund adaptive sports, support charities, and keep waste out of landfills. Here is how a single shoe donation creates lasting impact.",
    category: "Shoe Donations",
    date: "2025-01-08",
    excerpt:
      "A pair of sneakers sitting in your closet has more potential than you might think. Here is how donating them turns into real, measurable good.",
    body: [
      { type: "p", text: "Most of us have a few pairs of sneakers we no longer wear. They are too good to throw away, but not quite right to keep. Donating them through ProjectKix turns that hesitation into something genuinely useful: funding for athletes, support for charities, and one less pair headed for a landfill." },
      { type: "h2", text: "One pair, three kinds of good" },
      { type: "p", text: "Every pair you send does three things at once. It keeps wearable footwear in circulation instead of in the trash, it generates funding that supports adaptive sports programs and the causes our partners care about, and it gives someone, somewhere, a quality pair of shoes to put to use." },
      { type: "ul", items: [
        "Environmental: footwear stays out of landfills and the circular economy keeps moving.",
        "Social: funds flow to disabled athletes, local non-profits, and community programs.",
        "Practical: gently used sneakers find a second life with people who need them.",
      ] },
      { type: "h2", text: "Why it adds up" },
      { type: "p", text: "Individually, one donation feels small. Collectively, sneaker drives across schools, gyms, and workplaces add up to thousands of pairs and meaningful funding. That is the quiet power of recycling footwear at scale: ordinary closets become a steady source of support for extraordinary athletes." },
      { type: "h2", text: "Getting started is intentionally simple" },
      { type: "p", text: "We made the process as frictionless as possible. Request a free prepaid bag, fill it with up to seven pairs of wearable sneakers, and drop it at any FedEx location. We handle everything after that, so your good intention never gets stuck in logistics." },
    ],
    faqs: [
      { q: "What condition do the sneakers need to be in?", a: "They should be wearable, meaning no major damage, holes, or missing soles. Gently used is perfect." },
      { q: "Does it cost anything to donate?", a: "No. The mailing bag is free and shipping is prepaid, so donating costs you nothing but a few minutes." },
      { q: "How many pairs can I send?", a: "Up to seven pairs fit in a single ProjectKix bag. Need to send more? Request additional bags or host a drive." },
    ],
  },
  {
    slug: "sneaker-recycling-how-it-works",
    title: "Sneaker Recycling: How It Works and Why It Matters",
    metaTitle: "Sneaker Recycling: How It Works & Why It Matters | ProjectKix",
    metaDescription:
      "Sneakers can take up to 40 years to break down. Learn how sneaker recycling works, why it matters for the planet, and how to recycle yours for free.",
    category: "Recycling & Sustainability",
    date: "2025-01-15",
    excerpt:
      "Sneakers are surprisingly hard to dispose of responsibly. Here is what sneaker recycling actually involves and the difference it makes.",
    body: [
      { type: "p", text: "A sneaker is a small engineering marvel made of foam, rubber, textiles, plastics, and adhesives. That mix is exactly what makes it so difficult to throw away responsibly. Left in a landfill, a single pair can take up to 40 years to break down, slowly releasing materials that never needed to be wasted in the first place." },
      { type: "h2", text: "Reuse first, recycle second" },
      { type: "p", text: "The most sustainable thing you can do with a wearable sneaker is keep it being worn. That is why ProjectKix prioritizes reuse: gently used pairs are kept in circulation, extending their life and displacing demand for brand-new footwear. Pairs beyond reuse are handled responsibly so materials stay out of the trash." },
      { type: "h2", text: "Why landfills are the wrong answer" },
      { type: "ul", items: [
        "Hundreds of millions of pairs are discarded worldwide every year.",
        "Footwear is bulky and slow to decompose, taking up long-term landfill space.",
        "Reusing a pair avoids the carbon and resources required to manufacture a new one.",
      ] },
      { type: "h2", text: "Recycling that funds something bigger" },
      { type: "p", text: "What sets a ProjectKix drive apart is that recycling is also fundraising. The same act that keeps sneakers out of landfills generates support for disabled athletes and the charities our partners choose. Doing right by the planet and doing right by people become the same simple decision." },
    ],
    faqs: [
      { q: "Can worn-out sneakers be recycled too?", a: "Wearable pairs are prioritized for reuse. Pairs past their life are handled responsibly so materials are not simply landfilled." },
      { q: "Is recycling really better than donating to a thrift store?", a: "A dedicated program keeps footwear in circulation and turns it into funding for a cause, which a general donation bin usually cannot guarantee." },
      { q: "How do I recycle my sneakers with ProjectKix?", a: "Request a free prepaid bag, add up to seven pairs, and drop it at any FedEx location." },
    ],
  },
  {
    slug: "what-are-adaptive-sports",
    title: "What Adaptive Sports Are and Why They Change Lives",
    metaTitle: "What Are Adaptive Sports & Why They Matter | ProjectKix",
    metaDescription:
      "Adaptive sports open competition and community to athletes with disabilities. Learn what they are, why they matter, and how recycled sneakers help fund them.",
    category: "Adaptive Sports",
    date: "2025-01-22",
    excerpt:
      "Adaptive sports are about far more than competition. They rebuild confidence, community, and identity, and recycled sneakers help make them possible.",
    body: [
      { type: "p", text: "Adaptive sports are athletic activities modified, or specifically designed, so that people with disabilities can compete and thrive. From wheelchair basketball to adaptive track and field, they prove a simple truth: the desire to play, compete, and belong does not disappear after an injury or diagnosis." },
      { type: "h2", text: "More than a game" },
      { type: "p", text: "For many athletes, adaptive sports are where confidence comes back. They offer structure, teammates, goals, and the unmistakable feeling of being part of something. The benefits reach well beyond the court or track into mental health, independence, and community." },
      { type: "h2", text: "The barrier is usually funding" },
      { type: "p", text: "Specialized equipment, travel, coaching, and facility time all cost money, and that cost is often what stands between an athlete and the chance to play. This is the gap ProjectKix was built to help close." },
      { type: "ul", items: [
        "Sport wheelchairs and adaptive gear can be expensive to buy and maintain.",
        "Programs rely on donations, grants, and community support to operate.",
        "Every dollar raised from recycled sneakers can go directly toward access.",
      ] },
      { type: "h2", text: "How your sneakers fit in" },
      { type: "p", text: "When you recycle sneakers through ProjectKix, the funds generated help support adaptive sports programs and the athletes in them. Something as ordinary as cleaning out your closet becomes part of getting someone back in the game." },
    ],
    faqs: [
      { q: "Who can take part in adaptive sports?", a: "Athletes with a wide range of physical disabilities, at every level from first-timers to elite competitors." },
      { q: "How do recycled sneakers support adaptive sports?", a: "Drives generate funding that helps cover equipment, travel, and program costs for athletes." },
      { q: "Can my organization support a specific program?", a: "Yes. Partners can direct their drive toward the charity or cause they care about. Reach out to learn more." },
    ],
  },
  {
    slug: "wheelchair-basketball-and-your-sneakers",
    title: "Wheelchair Basketball: The Sport Your Old Sneakers Help Fund",
    metaTitle: "Wheelchair Basketball & How Sneakers Help Fund It | ProjectKix",
    metaDescription:
      "Wheelchair basketball is fast, fierce, and life-changing, and it is expensive to play. See how recycled sneakers help fund athletes and teams.",
    category: "Adaptive Sports",
    date: "2025-01-29",
    excerpt:
      "Fast, physical, and deeply competitive, wheelchair basketball gives athletes a court to call their own, and your sneakers help fund it.",
    body: [
      { type: "p", text: "Wheelchair basketball is one of the most popular adaptive sports in the world, and for good reason. It is fast, physical, strategic, and every bit as competitive as the running game. For athletes who thought their playing days were over, it is often a powerful way back to the sport they love." },
      { type: "h2", text: "A real sport, with real costs" },
      { type: "p", text: "A competition-grade sport wheelchair is custom-built and can cost thousands of dollars, and that is before travel, league fees, and court time. For many players and teams, funding is the difference between a full season and sitting one out." },
      { type: "h2", text: "Why it matters to the players" },
      { type: "p", text: "Ask athletes what the game gives them and the answers rarely start with trophies. They talk about teammates, routine, and relief. As one player put it, when problems pile up, practice takes them away. That is what your support helps protect." },
      { type: "ul", items: [
        "Teams need equipment, transport, and facility access to compete.",
        "Community drives can fund a season for athletes who could not otherwise play.",
        "Recycled sneakers turn idle footwear into court time.",
      ] },
      { type: "h2", text: "Turn a closet clean-out into a game day" },
      { type: "p", text: "Every ProjectKix bag of sneakers becomes funding that can help athletes get on the court. Request a free bag, or rally your team, gym, or company to run a drive together." },
    ],
    faqs: [
      { q: "Why is wheelchair basketball so expensive?", a: "Sport wheelchairs are custom equipment, and teams also pay for travel, league fees, and facility time." },
      { q: "Do my sneakers go directly to teams?", a: "Sneakers are recycled and reused; the funds generated help support adaptive sports programs and athletes." },
      { q: "How can my team help?", a: "Host a sneaker drive. We provide the bags and logistics so your team can focus on collecting pairs." },
    ],
  },
  {
    slug: "why-gyms-make-great-sneaker-drive-partners",
    title: "Why Gyms Make Great Sneaker-Drive Partners",
    metaTitle: "Why Gyms Make Great Sneaker-Drive Partners | ProjectKix",
    metaDescription:
      "Gyms and fitness studios are ideal places to host a sneaker drive. Learn why members love it, how it works, and how to start one for free.",
    category: "Partnerships",
    date: "2025-02-05",
    excerpt:
      "Few places see more sneakers than a gym. That makes fitness studios a natural home for a high-impact, low-effort sneaker drive.",
    body: [
      { type: "p", text: "If there is one place practically swimming in sneakers, it is the gym. Members replace their trainers regularly, care about doing good, and already show up several times a week. That combination makes a fitness facility one of the most effective places to host a sneaker drive." },
      { type: "h2", text: "Members already care" },
      { type: "p", text: "People who invest in their own health tend to care about their community and the planet too. A collection box by the front desk gives them an easy, visible way to act on that, no extra trip or effort required." },
      { type: "h2", text: "Good for the gym, too" },
      { type: "ul", items: [
        "A drive signals real community values to current and prospective members.",
        "It creates a positive talking point for staff and social media.",
        "Logistics are handled for you, so it is genuinely low-effort.",
      ] },
      { type: "h2", text: "How a gym drive works" },
      { type: "p", text: "We provide everything you need to get started, including collection materials and prepaid shipping. You provide the floor space and a friendly mention to members. The result is a steady stream of sneakers that funds adaptive sports and keeps waste out of landfills." },
      { type: "h2", text: "Ready to set one up?" },
      { type: "p", text: "Gyms across the country already host ProjectKix drives. Becoming a partner takes one conversation, and we handle the rest." },
    ],
    faqs: [
      { q: "Does hosting a drive cost the gym anything?", a: "No. We provide collection materials and prepaid shipping. The gym provides the space and a little visibility." },
      { q: "How much space do we need?", a: "A single collection box near the entrance or front desk is enough to get started." },
      { q: "How do we begin?", a: "Reach out through our partners page and we will set your gym up with everything it needs." },
    ],
  },
  {
    slug: "sneaker-drives-for-schools",
    title: "Sneaker Drives: A Meaningful Community Service Project for Schools",
    metaTitle: "Sneaker Drives for Schools: Easy Community Service | ProjectKix",
    metaDescription:
      "Looking for a community service project that teaches sustainability and empathy? A school sneaker drive is simple, free, and genuinely impactful.",
    category: "Community",
    date: "2025-02-12",
    excerpt:
      "A school sneaker drive teaches sustainability, empathy, and teamwork, and it gives students a tangible way to help real athletes.",
    body: [
      { type: "p", text: "Teachers and student leaders are always looking for service projects that are meaningful, manageable, and a little different. A sneaker drive checks every box. It is hands-on, it connects to real-world lessons about sustainability and inclusion, and it ends with a clear result students can be proud of." },
      { type: "h2", text: "Learning that sticks" },
      { type: "p", text: "A drive turns abstract ideas into something concrete. Students see how everyday waste can be redirected into good, and they learn that small, collective actions add up. It is a natural fit for lessons on the environment, community, and adaptive sports." },
      { type: "h2", text: "Easy to organize" },
      { type: "ul", items: [
        "Set a goal and a timeframe, like a two-week class or grade-level challenge.",
        "Place collection boxes in classrooms, the gym, or the main entrance.",
        "Celebrate the total collected and the impact it represents.",
      ] },
      { type: "h2", text: "A story worth telling" },
      { type: "p", text: "One fifth-grade class that ran a drive had no idea where it would lead, and ended up funding real equipment for athletes. That is the kind of outcome that turns a classroom project into a memory and a lifelong habit of giving." },
      { type: "h2", text: "Start your school drive" },
      { type: "p", text: "We make it simple for schools to take part, with materials and prepaid shipping included. Get in touch and we will help you plan a drive your students will remember." },
    ],
    faqs: [
      { q: "What age groups can participate?", a: "Any. Elementary classes, middle and high school clubs, and university groups all run successful drives." },
      { q: "Does the school need a budget?", a: "No. Collection materials and shipping are covered. The school provides enthusiasm and a place to collect." },
      { q: "How long should a drive run?", a: "Two to four weeks is a good window: long enough to build momentum, short enough to keep energy high." },
    ],
  },
  {
    slug: "sneaker-recycling-corporate-social-responsibility",
    title: "Sneaker Recycling as a Corporate Social Responsibility Win",
    metaTitle: "Sneaker Recycling: An Easy CSR Win for Companies | ProjectKix",
    metaDescription:
      "Looking for a CSR initiative employees actually enjoy? A corporate sneaker drive delivers measurable environmental and social impact with almost no overhead.",
    category: "Corporate Responsibility",
    date: "2025-02-19",
    excerpt:
      "A corporate sneaker drive is the rare CSR initiative that is easy to run, employees enjoy, and produces impact you can actually measure.",
    body: [
      { type: "p", text: "Corporate social responsibility works best when it is genuine, measurable, and easy for people to join. A sneaker drive delivers all three. It gives employees a simple way to participate, ties neatly to sustainability goals, and produces a tangible result you can report and celebrate." },
      { type: "h2", text: "Engagement employees actually want" },
      { type: "p", text: "Not every CSR program sparks excitement. Recycling sneakers does, because nearly everyone has a pair to contribute and the benefit is easy to understand. It is inclusive, low-pressure, and a natural team-building moment." },
      { type: "h2", text: "Impact you can measure and choose" },
      { type: "ul", items: [
        "Track pairs collected and waste diverted for clear reporting.",
        "Direct your drive toward the charity or cause your company cares about.",
        "Share the story internally and externally as proof of values in action.",
      ] },
      { type: "h2", text: "Built for busy teams" },
      { type: "p", text: "As a corporate partner you receive support with materials, marketing, and shipping, so the program runs without adding to anyone's workload. A unique code can connect every contribution back to your company and its chosen cause." },
      { type: "h2", text: "Make it part of your next initiative" },
      { type: "p", text: "Whether it is a one-time campaign or an ongoing program, a sneaker drive is a CSR win that is refreshingly simple to deliver. Let us help you launch one." },
    ],
    faqs: [
      { q: "Is this suitable for a distributed or hybrid workforce?", a: "Yes. Employees can request bags individually or collect at offices, making it flexible for any setup." },
      { q: "Can we report on the results?", a: "Absolutely. Drives are designed to be measurable so you can share pairs collected and impact created." },
      { q: "How do we choose the cause we support?", a: "Corporate partners can direct their drive toward a charity or organization of their choice. Contact us to set it up." },
    ],
  },
  {
    slug: "sustainable-footwear-make-sneakers-last",
    title: "Sustainable Footwear: How to Make Your Sneakers Last Longer",
    metaTitle: "Sustainable Footwear: Make Your Sneakers Last | ProjectKix",
    metaDescription:
      "The most sustainable sneaker is the one you already own. Practical tips to make footwear last longer, and what to do with pairs you have outgrown.",
    category: "Recycling & Sustainability",
    date: "2025-02-26",
    excerpt:
      "Sustainable footwear is not only about what you buy. It is about how long you keep wearing what you already own, and what you do next.",
    body: [
      { type: "p", text: "It is tempting to think sustainable footwear is a shopping decision, a greener pair to add to the rotation. But the most sustainable sneaker is almost always the one already in your closet. Making footwear last, then keeping it in circulation, beats buying new nearly every time." },
      { type: "h2", text: "Make them last" },
      { type: "ul", items: [
        "Rotate between pairs so cushioning has time to recover between wears.",
        "Clean them gently and air-dry rather than tossing them in the dryer.",
        "Re-lace, deodorize, and resole instead of replacing at the first sign of wear.",
      ] },
      { type: "h2", text: "Buy with longevity in mind" },
      { type: "p", text: "When you do need a new pair, choose quality and versatility over trend. A durable, comfortable shoe you wear for years is far kinder to the planet than several cheap pairs that wear out fast." },
      { type: "h2", text: "Then keep them in circulation" },
      { type: "p", text: "Eventually every pair is ready to move on. That is the moment that matters most. Instead of the trash, send wearable sneakers where they can keep being used and fund a cause at the same time." },
      { type: "h2", text: "Close the loop with ProjectKix" },
      { type: "p", text: "Recycling your old sneakers is the final, easy step in a sustainable footwear habit. Request a free bag and give your shoes a second life instead of a landfill." },
    ],
    faqs: [
      { q: "Is it really greener to keep old shoes longer?", a: "Yes. Extending a product's life avoids the materials and emissions needed to manufacture a replacement." },
      { q: "What should I do with sneakers I can no longer wear?", a: "If they are still wearable, donate them for reuse. ProjectKix keeps them in circulation and funds a cause." },
      { q: "Does buying sustainable brands matter?", a: "It helps, but using what you own longer and recycling responsibly usually matters more." },
    ],
  },
  {
    slug: "what-happens-after-you-donate-sneakers",
    title: "What Actually Happens After You Donate Your Sneakers",
    metaTitle: "What Happens After You Donate Sneakers | ProjectKix",
    metaDescription:
      "Ever wonder where your donated sneakers go? Follow the journey from your closet to a second life, and the funding it creates along the way.",
    category: "Shoe Donations",
    date: "2025-03-05",
    excerpt:
      "Transparency matters. Here is exactly what happens to your sneakers after they leave your hands, step by step.",
    body: [
      { type: "p", text: "When you donate something, it is fair to want to know where it goes. At ProjectKix we believe transparency is part of trust, so here is the honest, step-by-step journey your sneakers take after you send them in." },
      { type: "h2", text: "Step 1: Collection" },
      { type: "p", text: "Your sneakers travel in a prepaid bag from your nearest FedEx location to us. Whether they came from a single closet or a company-wide drive, every pair is gathered together for the next step." },
      { type: "h2", text: "Step 2: Sorting and reuse" },
      { type: "p", text: "Wearable pairs are prioritized for reuse so they keep being worn rather than discarded. This is the heart of the circular model: extending the life of footwear that still has plenty of miles left." },
      { type: "h2", text: "Step 3: Funding the mission" },
      { type: "ul", items: [
        "The process generates funding that supports adaptive sports and partner charities.",
        "Corporate and community partners can direct support to a chosen cause.",
        "Waste is kept out of landfills throughout.",
      ] },
      { type: "h2", text: "Step 4: Real-world impact" },
      { type: "p", text: "The end result is not abstract. It shows up as equipment, access, and opportunity for athletes, and as a measurable reduction in footwear waste. Your closet clean-out becomes someone else's chance to play." },
    ],
    faqs: [
      { q: "Do you sell the donated sneakers?", a: "The model keeps wearable footwear in circulation and turns it into funding that supports adaptive sports and partner causes." },
      { q: "Can I track the impact of my donation?", a: "Partners running drives receive support to measure results. Individual pairs join the larger collective impact." },
      { q: "What if some of my pairs are not reusable?", a: "Send what is wearable. Pairs past their life are handled responsibly rather than simply thrown away." },
    ],
  },
  {
    slug: "how-to-host-a-shoe-drive",
    title: "How to Host a Successful Shoe Drive: A Step-by-Step Guide",
    metaTitle: "How to Host a Successful Shoe Drive: Step-by-Step | ProjectKix",
    metaDescription:
      "A practical, step-by-step guide to running a successful shoe drive for your school, gym, company, or community, with free materials and shipping.",
    category: "Partnerships",
    date: "2025-03-12",
    excerpt:
      "Hosting a shoe drive is easier than you think. This step-by-step guide takes you from idea to impact, with the logistics handled for you.",
    body: [
      { type: "p", text: "A shoe drive is one of the simplest community campaigns to run and one of the most rewarding. With a clear goal, a little visibility, and the right partner handling logistics, almost any group can collect hundreds of pairs. Here is how to do it well." },
      { type: "h2", text: "Step 1: Set a clear goal and dates" },
      { type: "p", text: "Decide how many pairs you are aiming for and pick a focused window, usually two to four weeks. A specific target and deadline create urgency and give people something to rally around." },
      { type: "h2", text: "Step 2: Make it easy to participate" },
      { type: "ul", items: [
        "Place clearly labeled collection boxes where people already gather.",
        "Tell the story: explain that pairs fund adaptive sports and reduce waste.",
        "Send reminders and share a running total to keep momentum up.",
      ] },
      { type: "h2", text: "Step 3: Let us handle the logistics" },
      { type: "p", text: "As a ProjectKix partner you receive collection materials, marketing support, and prepaid shipping. That means you can focus entirely on collecting pairs and rallying your community, not on the operational details." },
      { type: "h2", text: "Step 4: Celebrate and repeat" },
      { type: "p", text: "When the drive wraps, share the total and the impact it created. Recognize your top contributors, thank everyone who took part, and consider making it an annual tradition." },
      { type: "h2", text: "Ready to start?" },
      { type: "p", text: "Whether you represent a school, gym, company, or community group, we will help you launch a drive that runs smoothly and makes a real difference." },
    ],
    faqs: [
      { q: "Who can host a shoe drive?", a: "Anyone. Schools, gyms, workplaces, teams, faith groups, and community organizations all run successful drives." },
      { q: "What do I need to provide?", a: "A place to collect pairs and a bit of visibility. We provide materials, guidance, and prepaid shipping." },
      { q: "How do I get started?", a: "Reach out through our partners or contact page and we will set you up with everything you need." },
    ],
  },
];

const WORDS_PER_MINUTE = 200;

export function readingMinutes(article: Article): number {
  const words = article.body.reduce((count, block) => {
    if (block.type === "ul") return count + block.items.join(" ").split(/\s+/).length;
    return count + block.text.split(/\s+/).length;
  }, 0);
  const faqWords = article.faqs.reduce(
    (count, f) => count + (f.q + " " + f.a).split(/\s+/).length,
    0,
  );
  return Math.max(1, Math.round((words + faqWords) / WORDS_PER_MINUTE));
}

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function relatedArticles(article: Article, limit = 3): Article[] {
  const sameCategory = articles.filter(
    (a) => a.slug !== article.slug && a.category === article.category,
  );
  const others = articles.filter(
    (a) => a.slug !== article.slug && a.category !== article.category,
  );
  return [...sameCategory, ...others].slice(0, limit);
}

export function formatDate(iso: string): string {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
