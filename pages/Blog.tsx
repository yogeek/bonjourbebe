import React from 'react';
import { BLOG_POSTS } from '../constants';

const Blog: React.FC = () => {
  return (
    <div className="pt-24 animate-fade-in">
      <div className="bg-cream pb-12 text-center px-6">
         <h1 className="font-serif text-4xl md:text-5xl text-taupe mb-6">Resources & Musings</h1>
         <p className="text-taupe/70 max-w-xl mx-auto">A collection of articles on gentle parenting, the benefits of touch, and a little French wisdom.</p>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group border border-sage/20">
              <div className="h-48 overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between text-xs text-taupe/50 uppercase tracking-widest mb-4">
                  <span>{post.category}</span>
                  <span>{post.date}</span>
                </div>
                <h2 className="font-serif text-2xl text-taupe mb-3 group-hover:text-pacific transition-colors">{post.title}</h2>
                <p className="text-taupe/70 mb-6 line-clamp-3 leading-relaxed">{post.excerpt}</p>
                <button className="text-pacific font-medium text-sm border-b border-pacific pb-0.5 hover:text-taupe hover:border-taupe transition-colors">Read More</button>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20 bg-taupe text-cream rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="font-serif text-3xl md:text-4xl mb-4">Join our Circle</h2>
            <p className="text-cream/80 mb-8 max-w-lg mx-auto">Receive monthly tips on infant development, upcoming workshop dates, and soothing techniques.</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input type="email" placeholder="Your email address" className="flex-grow px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:bg-white/20" />
              <button className="bg-pacific text-white px-8 py-3 rounded-full hover:bg-white hover:text-taupe transition-colors font-medium">Subscribe</button>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
             <svg width="100%" height="100%">
                <pattern id="pattern-circles" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <circle cx="20" cy="20" r="2" fill="#fff" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#pattern-circles)" />
             </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;