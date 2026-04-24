import { useState } from 'react';
import { supabase } from '../../lib/supabase';
import { useData } from '../../context/DataContext';
import { Trash2, Plus, Loader2 } from 'lucide-react';

export default function ManagePartners() {
  const { partners, refreshData } = useData();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !file) return; // Logo is required for partner
    
    setLoading(true);

    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `partners/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('images')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('images')
        .getPublicUrl(filePath);

      const { error } = await supabase.from('partners').insert([
        { name, logo_url: publicUrl }
      ]);

      if (error) throw error;

      setName('');
      setFile(null);
      await refreshData();
    } catch (error) {
      console.error('Error adding partner:', error);
      alert('Error adding partner. Check console.');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string, logoUrl: string) => {
    if (!confirm('Are you sure you want to delete this partner?')) return;
    
    setLoading(true);
    try {
      const { error: dbError } = await supabase.from('partners').delete().eq('id', id);
      if (dbError) throw dbError;

      if (logoUrl && logoUrl.includes('supabase.co')) {
        const pathMatch = logoUrl.match(/\/images\/(.+)$/);
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
        <h2 className="text-xl font-display font-semibold text-slate-900 mb-6">Add Partner</h2>
        <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Company Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-brand-blue focus:border-brand-blue"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Logo</label>
            <input
              type="file"
              accept="image/*"
              required
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brand-blue/10 file:text-brand-blue hover:file:bg-brand-blue/20"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="flex items-center justify-center px-4 py-2 bg-brand-blue text-white rounded-lg hover:bg-brand-blue-hover disabled:opacity-50"
          >
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <><Plus className="w-5 h-5 mr-2" /> Add Partner</>}
          </button>
        </form>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-200">
          <h2 className="text-xl font-display font-semibold text-slate-900">Current Partners</h2>
        </div>
        <ul className="divide-y divide-slate-200">
          {partners.map((partner) => (
            <li key={partner.id} className="p-6 flex items-center justify-between hover:bg-slate-50 transition-colors">
              <div className="flex items-center gap-4">
                {partner.logo_url && (
                  <img src={partner.logo_url} alt={partner.name} className="w-24 h-12 object-contain" />
                )}
                <div>
                  <h3 className="font-semibold text-slate-900">{partner.name}</h3>
                </div>
              </div>
              <button
                onClick={() => handleDelete(partner.id, partner.logo_url)}
                disabled={loading}
                className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </li>
          ))}
          {partners.length === 0 && (
            <li className="p-6 text-center text-slate-500">No partners found.</li>
          )}
        </ul>
      </div>
    </div>
  );
}
