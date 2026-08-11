// Componente compartido para renderizar un blog post.
// Usado por todos los /blog/<slug>/page.tsx individuales.
// DRY: el contenido vive en src/content/blog-data.ts.
// Soporta internal links con sintaxis: [[link:/ruta|anchor text]]

import Link from "next/link";
import type { BlogPost } from "@/content/blog-data";

// Renderiza un párrafo procesando internal links [[link:/ruta|anchor]]
function renderParagraphWithLinks(p: string, className?: string) {
  const regex = /\[\[link:([^\]|]+)\|([^\]]+)\]\]/g;
  const parts: Array<string | { href: string; text: string }> = [];
  let lastIndex = 0;
  let m: RegExpExecArray | null;
  while ((m = regex.exec(p)) !== null) {
    if (m.index > lastIndex) {
      parts.push(p.slice(lastIndex, m.index));
    }
    parts.push({ href: m[1], text: m[2] });
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < p.length) {
    parts.push(p.slice(lastIndex));
  }
  return (
    <p className={className}>
      {parts.map((part, i) =>
        typeof part === "string" ? (
          <span key={i}>{part}</span>
        ) : (
          <Link
            key={i}
            href={part.href}
            className="text-brand-blue hover:text-brand-blueDark font-semibold underline underline-offset-2"
          >
            {part.text}
          </Link>
        )
      )}
    </p>
  );
}

export function BlogPostView({ post }: { post: BlogPost }) {
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description,
    "datePublished": post.datePublished,
    "dateModified": post.datePublished,
    "author": {
      "@type": "Person",
      "name": "Edinson",
      "jobTitle": "Especialista en Climatización Automotriz",
      "worksFor": {
        "@type": "Organization",
        "name": "Autofixer",
        "@id": "https://autofixer.cl/#organization",
      },
    },
    "publisher": {
      "@type": "Organization",
      "name": "Autofixer",
      "logo": {
        "@type": "ImageObject",
        "url": "https://autofixer.cl/logo.png",
        "width": "300",
        "height": "60",
      },
      "@id": "https://autofixer.cl/#organization",
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://autofixer.cl/blog/${post.slug}/`,
    },
    "articleSection": "Aire acondicionado automotriz",
    "keywords": post.keywords,
    "inLanguage": "es-CL",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />

    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Header */}
        <header className="mb-10">
          <p className="text-sm text-brand-blue font-semibold mb-3 uppercase tracking-wide">
            {new Date(post.datePublished).toLocaleDateString("es-CL", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}{" "}
            · {post.author}
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-4">
            {post.h1}
          </h1>
        </header>

        {/* Intro */}
        <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed mb-10">
          {post.intro.map((p, i) => (
            <span key={i}>{renderParagraphWithLinks(p, "mb-4 text-lg block")}</span>
          ))}
        </div>

        {/* Body sections */}
        <div className="space-y-10">
          {post.sections.map((section) => {
            if (section.id === "tabla-comparativa" || section.id === "tabla-frecuencia") {
              return (
                <section key={section.id} id={section.id}>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                    {section.h2}
                  </h2>
                  {section.paragraphs.map((p, i) => (
                    <span key={i}>{renderParagraphWithLinks(p, "text-slate-700 mb-4 leading-relaxed block")}</span>
                  ))}
                  {section.id === "tabla-frecuencia" && <TablaFrecuencia />}
                  {section.id === "tabla-comparativa" && <TablaComparativa />}
                </section>
              );
            }
            return (
              <section key={section.id} id={section.id}>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                  {section.h2}
                </h2>
                {section.paragraphs.map((p, i) => (
                  <span key={i}>{renderParagraphWithLinks(p, "text-slate-700 mb-4 leading-relaxed block")}</span>
                ))}
              </section>
            );
          })}
        </div>

        {/* Conclusión */}
        <div className="mt-12 p-6 sm:p-8 bg-gradient-to-br from-brand-blue/5 to-brand-orange/5 border border-brand-blue/20 rounded-2xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Conclusión</h2>
          <p className="text-slate-700 leading-relaxed text-lg">{post.conclusion}</p>
        </div>

        {/* CTA */}
        <div className="mt-10 p-8 bg-gradient-to-br from-brand-blue to-brand-blueDark text-white rounded-2xl shadow-xl text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-3">{post.ctaTitle}</h3>
          <p className="text-white/90 mb-6 text-lg">{post.ctaText}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/cotizar"
              className="inline-flex items-center justify-center px-6 py-3 bg-brand-orange hover:bg-brand-orangeHover text-white font-semibold rounded-lg transition-colors"
            >
              Cotizar ahora
            </Link>
            <a
              href="https://wa.me/56935075600?text=Hola%20Autofixer%2C%20necesito%20un%20servicio%20de%20aire%20acondicionado%20para%20mi%20auto"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold rounded-lg transition-colors"
            >
              WhatsApp +56 9 3507 5600
            </a>
          </div>
        </div>

        {/* Back to blog */}
        <div className="mt-10 text-center">
          <Link
            href="/blog"
            className="text-brand-blue hover:text-brand-blueDark font-semibold"
          >
            ← Ver todos los artículos
          </Link>
        </div>
      </article>
    </main>
    </>
  );
}

function TablaFrecuencia() {
  return (
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
        <thead className="bg-gradient-to-r from-brand-blue to-brand-blueDark text-white">
          <tr>
            <th className="px-4 py-3 text-left font-semibold">Tipo de vehículo</th>
            <th className="px-4 py-3 text-left font-semibold">Frecuencia recomendada</th>
            <th className="px-4 py-3 text-left font-semibold">Servicio típico</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200">
          <tr className="hover:bg-slate-50">
            <td className="px-4 py-3 font-medium text-slate-900">Sedán / Hatchback</td>
            <td className="px-4 py-3 text-slate-700">Cada 12 meses / 15.000 km</td>
            <td className="px-4 py-3 text-slate-700">Mantención + recarga parcial</td>
          </tr>
          <tr className="hover:bg-slate-50">
            <td className="px-4 py-3 font-medium text-slate-900">SUV</td>
            <td className="px-4 py-3 text-slate-700">Cada 12 meses / 12.000 km</td>
            <td className="px-4 py-3 text-slate-700">Mantención completa + filtro</td>
          </tr>
          <tr className="hover:bg-slate-50">
            <td className="px-4 py-3 font-medium text-slate-900">Camioneta</td>
            <td className="px-4 py-3 text-slate-700">Cada 10–12 meses / 10.000 km</td>
            <td className="px-4 py-3 text-slate-700">Mantención + sanitización</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function TablaComparativa() {
  return (
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
        <thead className="bg-gradient-to-r from-brand-blue to-brand-blueDark text-white">
          <tr>
            <th className="px-4 py-3 text-left font-semibold">Característica</th>
            <th className="px-4 py-3 text-left font-semibold">R134a</th>
            <th className="px-4 py-3 text-left font-semibold">R1234yf</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200">
          <tr className="hover:bg-slate-50">
            <td className="px-4 py-3 font-medium text-slate-900">Época de uso</td>
            <td className="px-4 py-3 text-slate-700">1995–2017</td>
            <td className="px-4 py-3 text-slate-700">2017–actualidad</td>
          </tr>
          <tr className="hover:bg-slate-50">
            <td className="px-4 py-3 font-medium text-slate-900">Potencial calentamiento global (GWP)</td>
            <td className="px-4 py-3 text-slate-700">1.430</td>
            <td className="px-4 py-3 text-slate-700">4</td>
          </tr>
          <tr className="hover:bg-slate-50">
            <td className="px-4 py-3 font-medium text-slate-900">Inflamabilidad</td>
            <td className="px-4 py-3 text-slate-700">No inflamable</td>
            <td className="px-4 py-3 text-slate-700">Ligeramente inflamable (A2L)</td>
          </tr>
          <tr className="hover:bg-slate-50">
            <td className="px-4 py-3 font-medium text-slate-900">Aceite lubricante</td>
            <td className="px-4 py-3 text-slate-700">PAG</td>
            <td className="px-4 py-3 text-slate-700">PAG YF / POE</td>
          </tr>
          <tr className="hover:bg-slate-50">
            <td className="px-4 py-3 font-medium text-slate-900">Costo carga completa en Santiago</td>
            <td className="px-4 py-3 text-slate-700">$35.000 – $55.000</td>
            <td className="px-4 py-3 text-slate-700">$65.000 – $110.000</td>
          </tr>
          <tr className="hover:bg-slate-50">
            <td className="px-4 py-3 font-medium text-slate-900">Disponibilidad en Chile</td>
            <td className="px-4 py-3 text-slate-700">Alta</td>
            <td className="px-4 py-3 text-slate-700">Media (creciendo)</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
