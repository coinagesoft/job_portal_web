"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { BLOG_POSTS } from "@/constants/blogData";

const INITIAL_VISIBLE_COUNT = 3;
const LOAD_STEP = 3;

const BlogGridClient = () => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);

  const visiblePosts = useMemo(() => BLOG_POSTS.slice(0, visibleCount), [visibleCount]);
  const hasMore = visibleCount < BLOG_POSTS.length;

  return (
    <main className="main">
      <section className="section-box mt-50 mb-50">
        <div className="container">
          <div className="text-start mb-30">
            <h2 className="section-title mb-10">News and Blog</h2>
            <p className="font-lg color-text-paragraph-2">
              Insights, hiring updates, interview guidance, and profile improvement tips.
            </p>
          </div>

          <div className="row">
            {visiblePosts.map((post) => (
              <div key={post.id} className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 mb-30">
                <div className="card-grid-3 hover-up">
                  <div className="text-center card-grid-3-image">
                    <Link href={`/blog-details?slug=${post.slug}`}>
                      <img src={post.image} alt={post.title} />
                    </Link>
                  </div>
                  <div className="card-block-info">
                    <div className="tags mb-15">
                      <span className="btn btn-tag">{post.category}</span>
                    </div>
                    <h5>
                      <Link href={`/blog-details?slug=${post.slug}`}>{post.title}</Link>
                    </h5>
                    <p className="mt-10 color-text-paragraph font-sm">{post.excerpt}</p>
                    <div className="card-2-bottom mt-20">
                      <div className="row">
                        <div className="col-7">
                          <div className="d-flex">
                            <img className="img-rounded" src={post.authorImage} alt={post.author} />
                            <div>
                              <span className="font-sm font-bold color-brand-1 op-70">{post.author}</span>
                              <br />
                              <span className="font-xs color-text-paragraph-2">{post.date}</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-5 text-end pt-15">
                          <span className="color-text-paragraph-2 font-xs">{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-20">
            {hasMore ? (
              <button
                type="button"
                className="btn btn-brand-1 btn-icon-load hover-up"
                onClick={() => setVisibleCount((count) => Math.min(count + LOAD_STEP, BLOG_POSTS.length))}
              >
                Load More Posts
              </button>
            ) : (
              <span className="font-sm color-text-paragraph-2">You have reached the end of posts.</span>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogGridClient;

