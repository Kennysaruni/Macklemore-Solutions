import React, { useState, useRef } from 'react';
import { supabase } from '../../lib/supabase';
import { useBlogs, useData } from '../../context/DataContext';
import { Trash2, Plus, Loader2, Eye, Edit3, Heading1, Heading2, Heading3, Bold, Italic, List, Quote, Link2, Code } from 'lucide-react';
import MarkdownRenderer from '../../components/MarkdownRenderer';

export default function ManageBlog() {
  const { blogs, loading: blogsLoading } = useBlogs();
  const { refreshData } = useData();
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('AI in Operations');
  const [file, setFile] = useState<File | null>(null);
  const [activeTab, setActiveTab] = useState<'write' | 'preview'>('write');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const categories = [
    "AI in Operations",
    "Automation Strategies",
    "Industry Insights",
    "Case Study Breakdowns"
  ];

  const insertMarkdown = (prefix: string, suffix: string = '') => {
    if (!textareaRef.current) {
      setContent(prev => prev + prefix + suffix);
      return;
    }

    const textarea = textareaRef.current;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = content.substring(start, end);
    const replacement = prefix + (selectedText || 'text') + suffix;

    const newContent = content.substring(0, start) + replacement + content.substring(end);
    setContent(newContent);

    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + prefix.length, start + prefix.length + (selectedText.length || 4));
    }, 0);
  };

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
      setActiveTab('write');
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
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-200">
          <div>
            <h2 className="text-xl font-display font-semibold text-slate-900">Add Blog Post</h2>
            <p className="text-sm text-slate-500 mt-1">
              Supports Markdown formatting for headers (<code className="text-brand-blue font-mono"># H1</code>, <code className="text-brand-blue font-mono">## H2</code>, <code className="text-brand-blue font-mono">### H3</code>), bold, lists, and links.
            </p>
          </div>

          <div className="flex items-center bg-slate-100 p-1 rounded-lg border border-slate-200 shrink-0 self-start sm:self-auto">
            <button
              type="button"
              onClick={() => setActiveTab('write')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'write'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Edit3 className="w-4 h-4" /> Write
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('preview')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'preview'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Eye className="w-4 h-4" /> Live Preview
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 max-w-3xl">
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
              placeholder="e.g. Navigating AI Implementation in Enterprise Operations"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-sm font-medium text-slate-700">
                Content <span className="text-xs text-slate-500 font-normal">(Markdown enabled)</span>
              </label>
            </div>

            {activeTab === 'write' ? (
              <div className="border border-slate-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-brand-blue focus-within:border-brand-blue">
                {/* Markdown Toolbar */}
                <div className="flex flex-wrap items-center gap-1 p-2 bg-slate-50 border-b border-slate-200">
                  <button
                    type="button"
                    onClick={() => insertMarkdown('\n# ', '')}
                    title="Heading 1"
                    className="p-1.5 rounded hover:bg-slate-200 text-slate-700 text-xs font-bold flex items-center gap-0.5"
                  >
                    <Heading1 className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => insertMarkdown('\n## ', '')}
                    title="Heading 2"
                    className="p-1.5 rounded hover:bg-slate-200 text-slate-700 text-xs font-bold flex items-center gap-0.5"
                  >
                    <Heading2 className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => insertMarkdown('\n### ', '')}
                    title="Heading 3"
                    className="p-1.5 rounded hover:bg-slate-200 text-slate-700 text-xs font-bold flex items-center gap-0.5"
                  >
                    <Heading3 className="w-4 h-4" />
                  </button>
                  <div className="w-px h-4 bg-slate-300 mx-1" />
                  <button
                    type="button"
                    onClick={() => insertMarkdown('**', '**')}
                    title="Bold"
                    className="p-1.5 rounded hover:bg-slate-200 text-slate-700"
                  >
                    <Bold className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => insertMarkdown('*', '*')}
                    title="Italic"
                    className="p-1.5 rounded hover:bg-slate-200 text-slate-700"
                  >
                    <Italic className="w-4 h-4" />
                  </button>
                  <div className="w-px h-4 bg-slate-300 mx-1" />
                  <button
                    type="button"
                    onClick={() => insertMarkdown('\n- ', '')}
                    title="Bullet List"
                    className="p-1.5 rounded hover:bg-slate-200 text-slate-700"
                  >
                    <List className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => insertMarkdown('\n> ', '')}
                    title="Quote"
                    className="p-1.5 rounded hover:bg-slate-200 text-slate-700"
                  >
                    <Quote className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => insertMarkdown('[', '](url)')}
                    title="Link"
                    className="p-1.5 rounded hover:bg-slate-200 text-slate-700"
                  >
                    <Link2 className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => insertMarkdown('`', '`')}
                    title="Code"
                    className="p-1.5 rounded hover:bg-slate-200 text-slate-700"
                  >
                    <Code className="w-4 h-4" />
                  </button>
                </div>
                <textarea
                  ref={textareaRef}
                  required
                  rows={10}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full p-3 border-0 focus:ring-0 focus:outline-none font-mono text-sm leading-relaxed text-slate-800"
                  placeholder="# Article Title&#10;&#10;Write your post using Markdown.&#10;&#10;## Section Heading 1&#10;Add detailed explanations with **bold** text and lists:&#10;- Point 1&#10;- Point 2&#10;&#10;### Subheading&#10;More details..."
                ></textarea>
              </div>
            ) : (
              <div className="border border-slate-200 rounded-lg p-6 bg-slate-50 min-h-[250px]">
                {content ? (
                  <div>
                    <h1 className="text-3xl font-display font-bold text-slate-900 mb-4">
                      {title || 'Untitled Post'}
                    </h1>
                    <MarkdownRenderer content={content} />
                  </div>
                ) : (
                  <p className="text-slate-400 italic">No content to preview yet. Switch to the Write tab to add text.</p>
                )}
              </div>
            )}
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
            className="flex items-center justify-center px-6 py-2.5 bg-brand-blue text-white font-medium rounded-lg hover:bg-brand-blue-hover disabled:opacity-50 transition-colors"
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
            <li className="p-6 text-center text-slate-500 font-medium">No blog posts found.</li>
          )}
        </ul>
      </div>
    </div>
  );
}
