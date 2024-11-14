import React from "react";
import Link from "next/link";
import { HiMiniArrowRight } from "react-icons/hi2";

export default function BlogPreview({
  allPostsData,
}: {
  allPostsData: {
    id: string;
    date: string;
    title: string;
    subtitle: string;
    description: string;
  }[];
}) {
  return (
    <div className="bg-slate-900 w-full py-20 text-gray-50 dark:text-gray-50 blog-preview">
      <div className="lg:max-w-6xl mx-auto px-6 lg:px-12">
        <h2 data-aos="fade-right" className="text-4xl font-bold leading-8 mb-8">
          Recent Posts
        </h2>
        <div
          data-aos="fade-up"
          data-aos-delay={200}
          className="mt-4 text-lg font-wotfard"
        >
          I have a blog! These are my most recently published posts. Click the
          button below them to locate the rest of my blog.
        </div>
        <div className="grid grid-cols-1 gap-1 grid-flow-row mt-16">
          {allPostsData.map(
            ({ id, date, title, subtitle, description }, idx) => (
              <Link
                key={idx}
                href={`/posts/${id}`}
                className="container py-2 mb-12 group cursor-pointer"
              >
                <div
                  key={id}
                  data-aos="fade-up"
                  data-aos-delay={200 * idx + 100}
                >
                  <h3 className="text-[22px] font-bold leading-8 group-hover:text-[#a5b4fc] transition duration-500">
                    {title}
                  </h3>
                  {subtitle !== "No subtitle given" && (
                    <div className="text-[17px] leading-8 font-medium text-slate-400">
                      {subtitle}
                    </div>
                  )}

                  {description !== "No description given" && (
                    <div className="mt-4 font-normal text-base leading-7">
                      {description}
                    </div>
                  )}
                  <div className="mt-4 font-bold text-base flex items-center">
                    <span className="mr-1">Read more</span>
                    <span className="text-lg hidden group-hover:block group-hover:text-indigo-300 transition duration-1000">
                      <HiMiniArrowRight />
                    </span>
                  </div>
                </div>
              </Link>
            )
          )}
        </div>
        <Link href="/blog">
          <div
            className="resume-btn bg-indigo-400 rounded-full border border-2 text-[16px] border-transparent px-4 py-1 font-wotfard transition text-gray-50 mt-6 cursor-pointer w-fit leading-8"
            data-aos="fade-right"
            data-aos-delay={500}
          >
            Check out my blog!
          </div>
        </Link>
      </div>
    </div>
  );
}
