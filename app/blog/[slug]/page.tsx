import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts } from "@/app/lib/constants/blogs";
import { ArrowLeft, Clock, Tag, Phone } from "lucide-react";
import { businessInfo } from "@/app/lib/constants/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
    return blogPosts.map((post) => ({ slug: post.slug }));
  }

  export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | Sudarshana Profile Sheets Blog`,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: {
      canonical: `https://sudarshanaprofile.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      siteName: "Sudarshana Profile Sheets",
    },
  };
}

export default async function BlogPost({ params }: Props) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <div className="pt-20 pb-16 md:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">

        {/* Back */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-brand-primary mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>

        <article className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-brand-primary/10 text-brand-primary text-xs font-semibold rounded-full">
              <Tag className="w-3 h-3" /> {post.category}
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-gray-500">
              <Clock className="w-3 h-3" /> {post.readTime}
            </span>
            <span className="text-xs text-gray-400">
              {new Date(post.date).toLocaleDateString("en-IN", {
                year: "numeric", month: "long", day: "numeric"
              })}
            </span>
          </div>

          {/* Title */}
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>

         {/* Content */}
<div className="space-y-4 text-gray-700 leading-relaxed">
  {post.content.trim().split("\n").map((line, i) => {
    const trimmed = line.trim();
    if (!trimmed) return null;

    // H2 heading
    if (trimmed.startsWith("## "))
      return (
        <h2 key={i} className="font-display text-2xl font-bold text-gray-900 mt-8 mb-3 pt-4 border-t border-gray-100">
          {trimmed.replace("## ", "")}
        </h2>
      );

    // H3 heading
    if (trimmed.startsWith("### "))
      return (
        <h3 key={i} className="font-heading text-lg font-bold text-gray-800 mt-5 mb-2">
          {trimmed.replace("### ", "")}
        </h3>
      );

    // Bullet list item
    if (trimmed.startsWith("- "))
      return (
        <li key={i} className="ml-5 list-disc text-gray-700 text-sm">
          {trimmed.replace("- ", "")}
        </li>
      );

    // Regular paragraph — strip all ** bold markers
    const clean = trimmed.replace(/\*\*/g, "");
    return (
      <p key={i} className="text-gray-700 text-sm sm:text-base leading-relaxed">
        {clean}
      </p>
    );
  })}
</div>


          {/* CTA at bottom of post */}
          <div className="mt-12 pt-8 border-t border-gray-100 bg-brand-primary/5 rounded-xl p-6 text-center">
            <h3 className="font-display text-xl font-bold text-gray-900 mb-2">
              Need Roofing Solutions in Raipur?
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Contact Sudarshana Profile Sheets — authorised TATA Steel & APL Apollo dealer.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://wa.me/917000892760"
                target="_blank"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-all text-sm"
              >
                WhatsApp Us
              </a>
              <a
                href={`tel:${businessInfo.phone}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-brand-primary text-brand-primary font-semibold rounded-xl hover:bg-brand-primary/5 transition-all text-sm"
              >
                <Phone className="w-4 h-4" /> {businessInfo.phone}
              </a>
            </div>
          </div>

        </article>
      </div>
    </div>
  );
}
