import Link from 'next/link'
import { ArrowRight, Calendar, Clock, User } from 'lucide-react'
import { formatDate } from '@/lib/utils'

export const metadata = {
  title: 'Blog | Autofixer - Consejos sobre Aire Acondicionado Automotriz',
  description: 'Artículos, consejos y guías sobre mantenimiento de aire acondicionado automotriz. Aprende a cuidar tu sistema de AC.',
}

// Blog posts data - slugs deben coincidir con archivos MDX en /content/blog/
const posts = [
  {
    slug: 'por-que-tu-aire-acondicionado-no-enfria',
    title: 'Por Qué Tu Aire Acondicionado No Enfría y Cómo Solucionarlo en 2025',
    excerpt: 'Guía completa sobre las 10 causas más comunes por las que el aire acondicionado de tu auto no enfría correctamente, con soluciones paso a paso y costos estimados.',
    category: 'Diagnóstico',
    readingTime: 12,
    publishedAt: '2025-07-19',
    featured: true,
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800',
  },
  {
    slug: 'cada-cuanto-servicio-ac-auto',
    title: 'Cada Cuánto Hacer Servicio al Aire Acondicionado del Auto: Guía Completa 2025',
    excerpt: 'Calendario de mantenimiento mensual, trimestral y anual para tu sistema de climatización automotriz. Evita reparaciones costosas con mantenimiento preventivo.',
    category: 'Mantenimiento',
    readingTime: 10,
    publishedAt: '2025-07-19',
    featured: false,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
  },
  {
    slug: '5-errores-comunes-aire-acondicionado-auto',
    title: '5 Errores Graves que Destruyen tu Aire Acondicionado Automotriz',
    excerpt: 'Los errores más comunes que dañan el sistema de AC de tu vehículo. Descubre cómo evitarlos y ahorrar miles de pesos en reparaciones.',
    category: 'Mantenimiento',
    readingTime: 8,
    publishedAt: '2025-07-19',
    featured: false,
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800',
  },
  {
    slug: 'r134a-vs-r1234yf-gases-refrigerantes',
    title: 'R134a vs R1234yf: Guía Definitiva de Gases Refrigerantes para Autos en Chile',
    excerpt: 'Todo lo que necesitas saber sobre los tipos de gas refrigerante automotriz, sus diferencias, regulaciones en Chile y cuál usa tu vehículo.',
    category: 'Tecnología',
    readingTime: 9,
    publishedAt: '2025-07-19',
    featured: false,
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800',
  },
]

// Categories
const categories = [
  { name: 'Todos', count: posts.length },
  { name: 'Diagnóstico', count: 1 },
  { name: 'Mantenimiento', count: 2 },
  { name: 'Tecnología', count: 1 },
]

export default function BlogPage() {
  const featuredPost = posts.find(p => p.featured)
  const otherPosts = posts.filter(p => !p.featured)

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="badge bg-white/10 text-white mb-4">Blog</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Consejos y Guías sobre AC Automotriz
            </h1>
            <p className="text-xl text-white/80">
              Artículos escritos por nuestros técnicos para ayudarte a mantener 
              tu aire acondicionado en perfecto estado.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.name}
                className={`
                  px-4 py-2 rounded-full text-sm font-medium transition-colors
                  ${cat.name === 'Todos' 
                    ? 'bg-secondary text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'}
                `}
              >
                {cat.name}
                <span className="ml-2 text-xs opacity-70">({cat.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link 
              href={`/blog/${featuredPost.slug}`}
              className="group grid lg:grid-cols-2 gap-8 bg-white rounded-2xl overflow-hidden shadow-card"
            >
              <div className="relative h-64 lg:h-auto overflow-hidden">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 badge badge-secondary">
                  Destacado
                </span>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className="text-secondary font-medium text-sm mb-3">
                  {featuredPost.category}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-secondary transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-600 mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(featuredPost.publishedAt)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{featuredPost.readingTime} min de lectura</span>
                  </div>
                </div>
                <div className="flex items-center text-secondary font-medium">
                  Leer artículo
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Other Posts */}
      <section className="section pt-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="card card-hover overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-secondary font-medium text-sm">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3 group-hover:text-secondary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(post.publishedAt)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{post.readingTime} min</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section section-dark">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Recibe Consejos de Mantenimiento
          </h2>
          <p className="text-white/80 mb-8">
            Suscríbete a nuestro newsletter y recibe guías exclusivas para cuidar tu AC automotriz.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="tu@email.com"
              className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-secondary"
            />
            <button type="submit" className="btn btn-secondary">
              Suscribirse
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
