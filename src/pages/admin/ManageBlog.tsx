import { useState } from 'react';
import { supabase } from '../../lib/supabase';
import { useData } from '../../context/DataContext';
import { Trash2, Plus, Loader2 } from 'lucide-react';

export default function ManageBlog() {
  const { blogs, refreshData } = useData();
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('AI in Operations');
  const [file, setFile] = useState<File | null>(null);

  const categories = [
    "AI in Operations",
    "Automation Strategies",
    "Industry Insights",
    "Case Study Breakdowns"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !slug || !content || !category) return;
    
    setLoading(true);
    let image_url = '';

    try {
      if (file) {
        const fileExt = file.name.split('.').pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const filePath = `blog/${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from('images')
          .upload(filePath, file);

        if (uploadError) throw uploadError;

        const { data: { publicUrl } } = supabase.storage
          .from('images')
          .getPublicUrl(filePath);
          
        image_url = publicUrl;
      }

      const { error } = await supabase.from('blog_posts').insert([
        { title, slug, content, category, image_url }
      ]);

      if (error) throw error;

      setTitle('');
      setSlug('');
      setContent('');
      setCategory('AI in Operations');
      setFile(null);
      await refreshData();
    } catch (error) {
      console.error('Error adding blog post:', error);
      alert('Error adding blog post. Check console.');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string, imageUrl: string) => {
    if (!confirm('Are you sure you want to delete this post?')) return;
    
    setLoading(true);
    try {
      const { error: dbError } = await supabase.from('blog_posts').delete().eq('id', id);
      if (dbError) throw dbError;

      if (imageUrl && imageUrl.includes('supabase.co')) {
        const pathMatch = imageUrl.match(/\/images\/(.+)$/);
        if (pathMatch && pathMatch[1]) {
          await supabase.storage.from('images').remove([pathMatch[1]]);
        }
      }

      await refreshData();
    } catch (error) {
      console.error('Error deleting:', error);
      alert('Error deleting item. Check console.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h2 className="text-xl font-display font-semibold text-slate-900 mb-6">Add Blog Post</h2>
        <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Title</label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
                setSlug(e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, ''));
              }}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-brand-blue focus:border-brand-blue"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Slug</label>
            <input
              type="text"
              required
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-brand-blue focus:border-brand-blue bg-slate-50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Category</label>
            <select
              required
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-brand-blue focus:border-brand-blue bg-white"
            >
              {categories.map((cat, i) => (
                <option key={i} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Content</label>
            <textarea
              required
              rows={6}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-brand-blue focus:border-brand-blue"
            ></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Cover Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brand-blue/10 file:text-brand-blue hover:file:bg-brand-blue/20"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="flex items-center justify-center px-4 py-2 bg-brand-blue text-white rounded-lg hover:bg-brand-blue-hover disabled:opacity-50"
          >
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <><Plus className="w-5 h-5 mr-2" /> Add Post</>}
          </button>
        </form>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-200">
          <h2 className="text-xl font-display font-semibold text-slate-900">Current Posts</h2>
        </div>
        <ul className="divide-y divide-slate-200">
          {blogs.map((post) => (
            <li key={post.id} className="p-6 flex items-center justify-between hover:bg-slate-50 transition-colors">
              <div className="flex items-center gap-4">
                {post.image_url && (
                  <img src={post.image_url} alt={post.title} className="w-16 h-12 rounded object-cover" />
                )}
                <div>
                  <h3 className="font-semibold text-slate-900">{post.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <span>/{post.slug}</span>
                    {post.category && (
                      <>
                        <span>•</span>
                        <span className="px-2 py-0.5 rounded-full bg-slate-100 text-xs text-slate-600 font-medium">
                          {post.category}
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <button
                onClick={() => handleDelete(post.id, post.image_url)}
                disabled={loading}
                className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </li>
          ))}
          {blogs.length === 0 && (
            <li className="p-6 text-center text-slate-500">No blog posts found.</li>
          )}
        </ul>
      </div>
    </div>
  );
}
