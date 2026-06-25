import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight, Clock, ArrowRight, Footprints, Handshake, Mail } from "lucide-react";
import { siteUrl, canonical } from "@/lib/seo";
import { Reveal } from "@/components/motion/Reveal";
import {
  getArticle,
  relatedArticles,
  readingMinutes,
  formatDate,
  type Block,
} from "@/lib/blog";

export const Route = createFileRoute("/blogs/$slug")({
  head: ({ params }) => {
    const article = getArticle(params.slug);
    if (!article) {
      return {
        meta: [
          { title: "Article not found — ProjectKix" },
          { name: "robots", content: "noindex" },
        ],
      };
    }

    const url = `${siteUrl}/blogs/${article.slug}`;
    const image = `${siteUrl}/og-image.png`;
    const publisher = {
      "@type": "Organization",
      name: "ProjectKix",
      logo: { "@type": "ImageObject", url: `${siteUrl}/favicon.svg` },
    };

    const blogPosting = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: article.title,
      description: article.metaDescription,
      datePublished: article.date,
      dateModified: article.date,
      articleSection: article.category,
      author: { "@type": "Organization", name: "ProjectKix" },
      publisher,
      mainEntityOfPage: { "@type": "WebPage", "@id": url || `/blogs/${article.slug}` },
      image,
    };
    const breadcrumb = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl || "/" },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blogs` },
        { "@type": "ListItem", position: 3, name: article.title, item: url },
      ],
    };
    const faqPage = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: article.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    };

    return {
      meta: [
        { title: article.metaTitle },
        { name: "description", content: article.metaDescription },
        { property: "og:type", content: "article" },
        { property: "og:title", content: article.metaTitle },
        { property: "og:description", content: article.metaDescription },
        { property: "article:section", content: article.category },
        { property: "article:published_time", content: article.date },
        ...(siteUrl ? [{ property: "og:url", content: url }] : []),
      ],
      links: canonical(`/blogs/${article.slug}`),
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(blogPosting) },
        { type: "application/ld+json", children: JSON.stringify(breadcrumb) },
        { type: "application/ld+json", children: JSON.stringify(faqPage) },
      ],
    };
  },
  component: ArticlePage,
});

function ArticleBlock({ block }: { block: Block }) {
  if (block.type === "h2") {
    return <h2 className="mt-10 text-2xl font-extrabold text-ink">{block.text}</h2>;
  }
  if (block.type === "ul") {
    return (
      <ul className="mt-4 space-y-2 pl-5 list-disc marker:text-brand text-body text-lg">
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }
  return <p className="mt-4 text-body text-lg leading-relaxed">{block.text}</p>;
}

function ArticlePage() {
  const { slug } = Route.useParams();
  const article = getArticle(slug);

  if (!article) {
    return (
      <div className="px-4 py-24">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-brand font-bold uppercase tracking-widest text-sm">404</p>
          <h1 className="mt-3 text-3xl font-extrabold text-ink">Article not found</h1>
          <p className="mt-3 text-body">This article may have moved. Browse the latest stories instead.</p>
          <Link to="/blogs" className="btn-red mt-6">Back to the blog</Link>
        </div>
      </div>
    );
  }

  const related = relatedArticles(article);

  return (
    <div className="px-4 py-12">
      <div className="max-w-3xl mx-auto">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="text-sm text-body">
          <ol className="flex flex-wrap items-center gap-1">
            <li><Link to="/" className="hover:text-brand">Home</Link></li>
            <li aria-hidden="true"><ChevronRight size={14} className="mx-0.5 inline" /></li>
            <li><Link to="/blogs" className="hover:text-brand">Blog</Link></li>
            <li aria-hidden="true"><ChevronRight size={14} className="mx-0.5 inline" /></li>
            <li className="text-ink font-medium" aria-current="page">{article.category}</li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mt-6">
          <Link
            to="/blogs"
            className="inline-block rounded-full bg-brand/10 px-3 py-1 text-xs font-bold text-brand hover:bg-brand/20 transition-colors"
          >
            {article.category}
          </Link>
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-ink leading-tight">{article.title}</h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-body">
            <span>{formatDate(article.date)}</span>
            <span aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-1"><Clock size={14} /> {readingMinutes(article)} min read</span>
          </div>
        </header>

        {/* Body */}
        <article className="mt-8">
          {article.body.map((block, i) => (
            <ArticleBlock key={i} block={block} />
          ))}
        </article>

        {/* FAQ */}
        <section className="mt-16" aria-labelledby="faq-heading">
          <h2 id="faq-heading" className="text-2xl font-extrabold text-ink">Frequently asked questions</h2>
          <div className="mt-6 space-y-3">
            {article.faqs.map((f) => (
              <details key={f.q} className="card-soft p-5 group">
                <summary className="flex items-center justify-between cursor-pointer list-none font-semibold text-ink">
                  {f.q}
                  <ChevronRight size={18} className="text-brand transition-transform group-open:rotate-90" />
                </summary>
                <p className="mt-3 text-body">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Conversion CTA with internal links */}
        <Reveal>
          <section className="mt-16 card-soft p-8 bg-gradient-to-br from-brand/5 to-white">
            <h2 className="text-2xl font-extrabold text-ink">Ready to turn sneakers into impact?</h2>
            <p className="mt-2 text-body">Whether you have one pair or a whole community, there is a simple way to help.</p>
            <div className="mt-6 grid sm:grid-cols-3 gap-3">
              <Link to="/contribute" className="group card-soft card-hover p-4 flex items-center gap-3 focus-visible:outline focus-visible:outline-3 focus-visible:outline-brand">
                <Footprints className="text-brand shrink-0" size={22} />
                <span className="font-semibold text-ink text-sm">Donate shoes</span>
                <ArrowRight size={16} className="ml-auto text-brand transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/partners" className="group card-soft card-hover p-4 flex items-center gap-3 focus-visible:outline focus-visible:outline-3 focus-visible:outline-brand">
                <Handshake className="text-brand shrink-0" size={22} />
                <span className="font-semibold text-ink text-sm">Become a partner</span>
                <ArrowRight size={16} className="ml-auto text-brand transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/contact" className="group card-soft card-hover p-4 flex items-center gap-3 focus-visible:outline focus-visible:outline-3 focus-visible:outline-brand">
                <Mail className="text-brand shrink-0" size={22} />
                <span className="font-semibold text-ink text-sm">Contact us</span>
                <ArrowRight size={16} className="ml-auto text-brand transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </section>
        </Reveal>

        {/* Related articles */}
        {related.length > 0 && (
          <section className="mt-16" aria-labelledby="related-heading">
            <h2 id="related-heading" className="text-2xl font-extrabold text-ink">Related articles</h2>
            <div className="mt-6 grid sm:grid-cols-3 gap-4">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to="/blogs/$slug"
                  params={{ slug: r.slug }}
                  className="group card-soft card-hover p-5 flex flex-col focus-visible:outline focus-visible:outline-3 focus-visible:outline-brand"
                >
                  <span className="text-xs font-bold text-brand uppercase tracking-wider">{r.category}</span>
                  <span className="mt-2 font-bold text-ink leading-snug">{r.title}</span>
                  <span className="mt-3 inline-flex items-center gap-1 text-brand font-semibold text-sm">
                    Read <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
