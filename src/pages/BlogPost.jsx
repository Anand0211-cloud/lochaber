import { useParams, useNavigate, Link } from 'react-router-dom';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { blogPosts } from '../data/knowledgeData';

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <Layout>
        <div className="pt-40 pb-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Beitrag nicht gefunden</h1>
          <Link to="/knowledge" className="text-emerald-600 hover:underline">Zurück zum Wissen</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO 
        title={post.seoTitle || post.title}
        description={post.seoDescription || post.summary}
        schema={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": post.title,
          "image": post.image,
          "author": {
            "@type": "Person",
            "name": post.author
          },
          "datePublished": post.date,
          "description": post.summary
        }}
      />
      <article className="pt-32 pb-20 bg-white dark:bg-slate-950 min-h-screen">
        <div className="max-w-4xl mx-auto px-8">
          {/* Back Button */}
          <button 
            onClick={() => navigate('/knowledge')}
            className="group flex items-center gap-2 text-slate-500 hover:text-[#003036] dark:hover:text-white mb-12 transition-colors font-medium text-sm"
          >
            <span className="material-symbols-outlined text-sm group-hover:-translate-x-1 transition-transform">arrow_back</span>
            Zurück zum Wissen
          </button>

          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs uppercase tracking-widest font-bold text-emerald-600 dark:text-emerald-400 px-3 py-1 bg-emerald-50 dark:bg-emerald-900/20 rounded-full">
                {post.category}
              </span>
              <span className="text-sm text-slate-400 dark:text-slate-500 font-['Inter']">
                {new Date(post.date).toLocaleDateString('de-DE', { month: 'long', day: 'numeric', year: 'numeric' })}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#003036] dark:text-white mb-8 leading-[1.1]">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 py-6 border-y border-slate-100 dark:border-slate-800">
              <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-700 dark:text-emerald-400 font-bold">
                {post.author[0]}
              </div>
              <div>
                <p className="text-sm font-bold text-[#003036] dark:text-white uppercase tracking-wider">{post.author}</p>
                <p className="text-xs text-slate-500 font-['Inter']">Lochaber Insights Team</p>
              </div>
            </div>
          </header>

          {/* Hero Image */}
          <div className="aspect-[21/9] rounded-3xl overflow-hidden mb-16 shadow-2xl shadow-emerald-900/5">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-[#003036] dark:prose-headings:text-white prose-p:text-slate-600 dark:prose-p:text-slate-400 prose-p:leading-relaxed prose-p:font-['Inter'] prose-blockquote:border-emerald-500 prose-blockquote:bg-slate-50 dark:prose-blockquote:bg-slate-900/50 prose-blockquote:py-2 prose-blockquote:px-8 prose-blockquote:rounded-r-xl prose-li:text-slate-600 dark:prose-li:text-slate-400">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          {/* Related Articles */}
          <div className="mt-32 pt-20 border-t border-outline-variant/20">
            <h3 className="text-2xl font-bold text-primary mb-12 flex items-center gap-4">
              Verwandte Analysen
              <span className="h-[1px] flex-1 bg-outline-variant/20"></span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts
                .filter(p => p.category === post.category && p.id !== post.id)
                .slice(0, 3)
                .map(related => (
                  <Link 
                    to={`/knowledge/${related.slug}`} 
                    key={related.id}
                    className="group"
                  >
                    <div className="aspect-video rounded-2xl overflow-hidden mb-4 border border-outline-variant/10 shadow-sm transition-all group-hover:shadow-xl group-hover:shadow-primary/5">
                      <img src={related.image} alt={related.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                    </div>
                    <h4 className="font-bold text-primary group-hover:text-secondary transition-colors line-clamp-2">{related.title}</h4>
                  </Link>
                ))
              }
            </div>
          </div>

          {/* Footer Navigation */}
          <div className="mt-20 pt-10 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
             <div className="flex gap-4">
                <button className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-600 transition-all">
                  <i className="fa-brands fa-linkedin-in"></i>
                </button>
                <button className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-600 transition-all">
                  <i className="fa-brands fa-x-twitter"></i>
                </button>
             </div>
             <Link to="/contact" className="editorial-gradient px-8 py-3 text-white font-bold rounded-full text-sm shadow-xl shadow-emerald-900/10 hover:translate-y-[-2px] transition-transform">
               Thema besprechen
             </Link>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
