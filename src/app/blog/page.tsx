import type { Metadata } from "next";
import Link from "next/link";
import { POSTS } from "@/content/blog-data";

export const metadata: Metadata = {
  title: "Blog Autofixer — Guías sobre Aire Acondicionado Automotriz",
  description:
    "Artículos, guías y consejos sobre aire acondicionado automotriz en Santiago. Aprende a cuidar el A/C de tu auto y evitar reparaciones costosas.",
  alternates: {
    canonical: "https://autofixer.cl/blog",
  },
  openGraph: {
    title: "Blog Autofixer — Guías sobre Aire Acondicionado Automotriz",
    description:
      "Artículos, guías y consejos sobre aire acondicionado automotriz en Santiago.",
    url: "https://autofixer.cl/blog",
    siteName: "Autofixer",
    locale: "es_CL",
    type: "website",

    images: [
      {
        url: 'https://autofixer.cl/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Blog Autofixer - Aire Acondicionado Automotriz',
      },
    ],
  },
};

export default function BlogIndex() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <header className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Blog Autofixer
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Guías, consejos y respuestas sobre el aire acondicionado de tu auto.
            Aprende a cuidarlo y evitar reparaciones costosas.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block p-6 bg-white border border-slate-200 rounded-2xl hover:border-brand-blue hover:shadow-lg transition-all"
            >
              <p className="text-xs text-brand-blue font-semibold uppercase tracking-wide mb-2">
                {new Date(post.datePublished).toLocaleDateString("es-CL", {
                  year: "numeric",
                  month: "long",
                })}
              </p>
              <h2 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2">
                {post.h1}
              </h2>
              <p className="text-slate-600 text-sm line-clamp-3">
                {post.description}
              </p>
              <p className="mt-4 text-brand-blue font-semibold text-sm">
                Leer artículo →
              </p>
            </Link>
          ))}
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Blog de Autofixer sobre Aire Acondicionado Automotriz",
            "itemListElement": POSTS.map((post, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "url": `https://autofixer.cl/blog/${post.slug}/`,
              "name": post.h1,
            })),
          }),
        }}
      />
    </main>
  );
}
