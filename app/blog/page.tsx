import { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/app/lib/constants/blogs";
import { ArrowRight, Clock, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog - Sudarshana Profile Sheets | Roofing Tips & Industry Insights",
  description: "Expert articles on colour coated profile sheets, TATA Durashine, APL Apollo roofing, shed construction, and industrial roofing solutions in Raipur, Chhattisgarh.",
  keywords: [
    "roofing blog Raipur",
    "colour coated sheets guide",
    "TATA Durashine tips",
    "APL Apollo roofing Chhattisgarh",
    "profile sheets installation guide",
  ],
  alternates: { canonical: "https://sudarshanaprofile.com/blog" },
};

export default function Blog() {
  return (
    <div className="pt-20 pb-16 md:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 bg-brand-primary/10 text-brand-primary text-sm font-semibold rounded-full mb-4">
            Knowledge Hub
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Roofing Insights & Tips
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Expert guides on colour coated profile sheets, TATA Steel & APL Apollo products, and construction best practices.
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all overflow-hidden"
            >
              {/* Category banner */}
              <div className="h-2 bg-brand-primary w-full" />

              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-brand-primary/10 text-brand-primary text-xs font-semibold rounded-full">
                    <Tag className="w-3 h-3" />
                    {post.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-gray-500">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>

                <h2 className="font-display text-lg font-bold text-gray-900 mb-3 leading-snug group-hover:text-brand-primary transition-colors">
                  {post.title}
                </h2>

                <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 mb-5">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">
                    {new Date(post.date).toLocaleDateString("en-IN", {
                      year: "numeric", month: "long", day: "numeric"
                    })}
                  </span>
                  <span className="inline-flex items-center gap-1 text-brand-primary text-sm font-semibold group-hover:gap-2 transition-all">
                    Read More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
