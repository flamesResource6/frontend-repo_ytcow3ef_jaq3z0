import React from 'react';

const posts = [
  {
    title: 'Designing trust in fintech',
    summary: 'How soft colors and clear affordances reduce cognitive load in money apps.',
    date: 'Oct 10, 2025',
  },
  {
    title: 'Reducing churn with better billing UX',
    summary: 'Small UI details that make recurring payments feel effortless.',
    date: 'Sep 28, 2025',
  },
  {
    title: 'The future of embedded payments',
    summary: 'APIs, wallets and instant payouts are changing how products monetize.',
    date: 'Sep 7, 2025',
  },
];

const BlogCard = ({ post }) => (
  <article className="rounded-2xl bg-white/90 ring-1 ring-slate-200 p-6 hover:shadow-md transition">
    <h4 className="text-slate-900 font-semibold text-lg">{post.title}</h4>
    <p className="mt-2 text-slate-600 text-sm">{post.summary}</p>
    <div className="mt-4 text-xs text-slate-500">{post.date}</div>
  </article>
);

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-gradient-to-b from-white to-rose-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">From the blog</h2>
          <p className="mt-3 text-slate-600">Insights on product, payments and design.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((p) => (
            <BlogCard key={p.title} post={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
