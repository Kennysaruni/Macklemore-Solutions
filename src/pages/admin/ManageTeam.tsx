import React, { useState } from 'react';
import { supabase } from '../../lib/supabase';
import { useTeam, useData } from '../../context/DataContext';
import { Trash2, Plus, Loader2 } from 'lucide-react';

export default function ManageTeam() {
  const { team, loading: teamLoading } = useTeam();
  const { refreshData } = useData();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !role) return;
    
    setLoading(true);
    let image_url = '';

    try {
      if (file) {
        const fileExt = file.name.split('.').pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const filePath = `team/${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from('images')
          .upload(filePath, file);

        if (uploadError) throw uploadError;

        const { data: { publicUrl } } = supabase.storage
          .from('images')
          .getPublicUrl(filePath);
          
        image_url = publicUrl;
      }

      const { error } = await supabase.from('team').insert([
        { name, role, linkedin, image_url }
      ]);

      if (error) throw error;

      setName('');
      setRole('');
      setLinkedin('');
      setFile(null);
      await refreshData();
    } catch (error) {
      console.error('Error adding team member:', error);
      alert('Error adding team member. Check console.');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string, imageUrl: string) => {
    if (!confirm('Are you sure you want to delete this team member?')) return;
    
    setLoading(true);
    try {
      // Delete from DB
      const { error: dbError } = await supabase.from('team').delete().eq('id', id);
      if (dbError) throw dbError;

      // Delete image from storage if exists
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
        <h2 className="text-xl font-display font-semibold text-slate-900 mb-6">Add Team Member</h2>
        <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-brand-blue focus:border-brand-blue"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Role</label>
            <input
              type="text"
              required
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-brand-blue focus:border-brand-blue"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">LinkedIn URL (Optional)</label>
            <input
              type="url"
              value={linkedin}
              onChange={(e) => setLinkedin(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-brand-blue focus:border-brand-blue"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Profile Image</label>
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
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <><Plus className="w-5 h-5 mr-2" /> Add Member</>}
          </button>
        </form>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-200">
          <h2 className="text-xl font-display font-semibold text-slate-900">Current Team</h2>
        </div>
        <ul className="divide-y divide-slate-200">
          {team.map((member) => (
            <li key={member.id} className="p-6 flex items-center justify-between hover:bg-slate-50 transition-colors">
              <div className="flex items-center gap-4">
                {member.image_url ? (
                  <img src={member.image_url} alt={member.name} className="w-12 h-12 rounded-full object-cover" />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold">
                    {member.name.charAt(0)}
                  </div>
                )}
                <div>
                  <h3 className="font-semibold text-slate-900">{member.name}</h3>
                  <p className="text-sm text-slate-500">{member.role}</p>
                </div>
              </div>
              <button
                onClick={() => handleDelete(member.id, member.image_url)}
                disabled={loading}
                className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50"
                title="Delete"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </li>
          ))}
          {team.length === 0 && (
            <li className="p-6 text-center text-slate-500">No team members found.</li>
          )}
        </ul>
      </div>
    </div>
  );
}
