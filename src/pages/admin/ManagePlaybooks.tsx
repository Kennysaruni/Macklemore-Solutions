import React, { useState } from 'react';
import { supabase } from '../../lib/supabase';
import { usePlaybooks, useData } from '../../context/DataContext';
import { Trash2, Plus, Loader2 } from 'lucide-react';

export default function ManagePlaybooks() {
  const { playbooks, loading: playbooksLoading } = usePlaybooks();
  const { refreshData } = useData();
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [download_url, setDownloadUrl] = useState('');
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description || !download_url) return;
    
    setLoading(true);
    let image_url = '';

    try {
      if (file) {
        const fileExt = file.name.split('.').pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const filePath = `playbooks/${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from('images')
          .upload(filePath, file);

        if (uploadError) throw uploadError;

        const { data: { publicUrl } } = supabase.storage
          .from('images')
          .getPublicUrl(filePath);
          
        image_url = publicUrl;
      }

      const { error } = await supabase.from('playbooks').insert([
        { title, description, content, download_url, image_url }
      ]);

      if (error) throw error;

      setTitle('');
      setDescription('');
      setContent('');
      setDownloadUrl('');
      setFile(null);
      await refreshData();
    } catch (error) {
      console.error('Error adding playbook:', error);
      alert('Error adding playbook. Check console.');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string, imageUrl: string) => {
    if (!confirm('Are you sure you want to delete this playbook?')) return;
    
    setLoading(true);
    try {
      const { error: dbError } = await supabase.from('playbooks').delete().eq('id', id);
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
        <h2 className="text-xl font-display font-semibold text-slate-900 mb-6">Add AI Playbook</h2>
        <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Title</label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-brand-blue focus:border-brand-blue"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Description</label>
            <textarea
              required
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-brand-blue focus:border-brand-blue"
            ></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Full Content / Article (Optional)</label>
            <textarea
              rows={8}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-brand-blue focus:border-brand-blue"
              placeholder="Write the full playbook content or an executive summary to be read on the page..."
            ></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Download Link (PDF URL or Landing Page)</label>
            <input
              type="url"
              required
              value={download_url}
              onChange={(e) => setDownloadUrl(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-brand-blue focus:border-brand-blue"
            />
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
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <><Plus className="w-5 h-5 mr-2" /> Add Playbook</>}
          </button>
        </form>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-200">
          <h2 className="text-xl font-display font-semibold text-slate-900">Current AI Playbooks</h2>
        </div>
        <ul className="divide-y divide-slate-200">
          {playbooks.map((item) => (
            <li key={item.id} className="p-6 flex items-center justify-between hover:bg-slate-50 transition-colors">
              <div className="flex items-center gap-4">
                {item.image_url && (
                  <img src={item.image_url} alt={item.title} className="w-12 h-16 rounded object-cover" />
                )}
                <div>
                  <h3 className="font-semibold text-slate-900">{item.title}</h3>
                  <a href={item.download_url} target="_blank" rel="noopener noreferrer" className="text-sm text-brand-blue hover:underline">View Link</a>
                </div>
              </div>
              <button
                onClick={() => handleDelete(item.id, item.image_url)}
                disabled={loading}
                className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </li>
          ))}
          {playbooks.length === 0 && (
            <li className="p-6 text-center text-slate-500">No playbooks found.</li>
          )}
        </ul>
      </div>
    </div>
  );
}
