import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar } from 'lucide-react';
import { useBlogs } from '../context/DataContext';
import MarkdownRenderer from '../components/MarkdownRenderer';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const { blogs, loading } = useBlogs();
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    if (!loading && blogs.length > 0) {
      const foundPost = blogs.find(b => b.slug === slug);
      setPost(foundPost || null);
    }
  }, [slug, blogs, loading]);

  if (loading) {
    return (
      <div className="min-h-screen pt-36 pb-24 flex justify-center items-center bg-slate-50">
        <p className="text-xl text-slate-500">Loading post...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen pt-36 pb-24 flex flex-col justify-center items-center bg-slate-50">
        <h1 className="text-3xl font-display font-bold text-slate-900 mb-4">Post Not Found</h1>
        <p className="text-slate-600 mb-8">The blog post you're looking for doesn't exist or has been removed.</p>
        <Link to="/blog" className="px-6 py-3 rounded-full bg-brand-blue text-white font-medium hover:bg-blue-700 transition-colors">
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-24">
      <article className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Link to="/blog" className="inline-flex items-center text-brand-blue font-medium hover:text-blue-700 transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to all insights
          </Link>

          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 leading-tight mb-6">
              {post.title}
            </h1>
            <div className="flex items-center text-slate-500 text-sm">
              <Calendar className="w-4 h-4 mr-2" />
              {new Date(post.created_at).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
          </header>

          {post.image_url && (
            <div className="w-full aspect-[21/9] rounded-2xl overflow-hidden mb-12 bg-slate-200">
              <img 
                src={post.image_url} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <MarkdownRenderer content={post.content} />
        </motion.div>
      </article>
    </div>
  );
}
