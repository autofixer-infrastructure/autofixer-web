import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogPostView } from "@/components/BlogPostView";
import { POSTS } from "@/content/blog-data";

const POST_SLUG = "r134a-vs-r1234yf-gases-refrigerantes";

export function generateMetadata(): Metadata {
  const post = POSTS.find((p) => p.slug === POST_SLUG);
  if (!post) return {};
  return {
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.description,
    keywords: post.keywords,
    authors: [{ name: post.author }],
    alternates: {
      canonical: "https://autofixer.cl/blog/r134a-vs-r1234yf-gases-refrigerantes",
    },
    openGraph: {
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.description,
      url: "https://autofixer.cl/blog/r134a-vs-r1234yf-gases-refrigerantes",
      siteName: "Autofixer",
      locale: "es_CL",
      type: "article",
      publishedTime: post.datePublished,
      authors: [post.author],
      images: [
        {
          url: "https://autofixer.cl/og-blog-r134a-vs-r1234yf-gases-refrigerantes.jpg",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.description,
    },
  };
}

export default function Page() {
  const post = POSTS.find((p) => p.slug === POST_SLUG);
  if (!post) notFound();
  return <BlogPostView post={post} />;
}
