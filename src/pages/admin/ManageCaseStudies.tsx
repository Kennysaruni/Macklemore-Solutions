import { useState } from 'react';
import { supabase } from '../../lib/supabase';
import { useData } from '../../context/DataContext';
import { Trash2, Plus, Loader2, BarChart3, ShieldCheck, BookOpen, Calculator, Activity } from 'lucide-react';

export default function ManageCaseStudies() {
  const { caseStudies, refreshData } = useData();
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [client, setClient] = useState('');
  const [industry, setIndustry] = useState('');
  const [region, setRegion] = useState('');
  const [size, setSize] = useState('');
  const [iconName, setIconName] = useState('bar-chart');
  const [situation, setSituation] = useState('');
  const [solution, setSolution] = useState('');
  const [deliverables, setDeliverables] = useState('');
  const [impact, setImpact] = useState('');
  const [file, setFile] = useState<File | null>(null);

  const getIcon = (name: string) => {
    const props = { className: "w-5 h-5 text-slate-600" };
    switch (name) {
      case 'shield-check': return <ShieldCheck {...props} />;
      case 'book-open': return <BookOpen {...props} />;
      case 'calculator': return <Calculator {...props} />;
      case 'activity': return <Activity {...props} />;
      case 'bar-chart':
      default:
        return <BarChart3 {...props} />;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !industry || !region || !situation || !solution) return;
    
    setLoading(true);
    let image_url = '';

    try {
      if (file) {
        const fileExt = file.name.split('.').pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const filePath = `case-studies/${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from('images')
          .upload(filePath, file);

        if (uploadError) throw uploadError;

        const { data: { publicUrl } } = supabase.storage
          .from('images')
          .getPublicUrl(filePath);
          
        image_url = publicUrl;
      }

      const { error } = await supabase.from('case_studies').insert([
        { 
          title, 
          client: client || null, 
          industry, 
          region, 
          size: size || null, 
          icon_name: iconName, 
          situation, 
          solution, 
          deliverables: deliverables.split('\n').filter(d => d.trim() !== ''), 
          impact: impact.split('\n').filter(i => i.trim() !== ''), 
          image_url 
        }
      ]);

      if (error) throw error;

      setTitle('');
      setClient('');
      setIndustry('');
      setRegion('');
      setSize('');
      setIconName('bar-chart');
      setSituation('');
      setSolution('');
      setDeliverables('');
      setImpact('');
      setFile(null);
      await refreshData();
    } catch (error) {
      console.error('Error adding case study:', error);
      alert('Error adding case study. Check console.');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string, imageUrl: string) => {
    if (!confirm('Are you sure you want to delete this case study?')) return;
    
    setLoading(true);
    try {
      const { error: dbError } = await supabase.from('case_studies').delete().eq('id', id);
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
        <h2 className="text-xl font-display font-semibold text-slate-900 mb-6">Add Case Study</h2>
        <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl">
          <div className="grid grid-cols-2 gap-4">
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
              <label className="block text-sm font-medium text-slate-700 mb-1">Client (Optional)</label>
              <input
                type="text"
                value={client}
                onChange={(e) => setClient(e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-brand-blue focus:border-brand-blue"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Industry</label>
              <input
                type="text"
                required
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-brand-blue focus:border-brand-blue"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Region</label>
              <input
                type="text"
                required
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-brand-blue focus:border-brand-blue"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Company Size (Optional)</label>
              <input
                type="text"
                value={size}
                onChange={(e) => setSize(e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-brand-blue focus:border-brand-blue"
                placeholder="e.g. 120 Employees"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Icon Name</label>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center shrink-0 border border-slate-200">
                  {getIcon(iconName)}
                </div>
                <select
                  value={iconName}
                  onChange={(e) => setIconName(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-brand-blue focus:border-brand-blue bg-white"
                >
                  <option value="bar-chart">Bar Chart</option>
                  <option value="shield-check">Shield Check</option>
                  <option value="book-open">Book Open</option>
                  <option value="calculator">Calculator</option>
                  <option value="activity">Activity</option>
                </select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Situation</label>
              <textarea
                required
                rows={4}
                value={situation}
                onChange={(e) => setSituation(e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-brand-blue focus:border-brand-blue"
              ></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Solution</label>
              <textarea
                required
                rows={4}
                value={solution}
                onChange={(e) => setSolution(e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-brand-blue focus:border-brand-blue"
              ></textarea>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Deliverables (One per line)</label>
              <textarea
                rows={4}
                value={deliverables}
                onChange={(e) => setDeliverables(e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-brand-blue focus:border-brand-blue"
                placeholder={`Deliverable 1\nDeliverable 2\nDeliverable 3`}
              ></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Impact (One per line)</label>
              <textarea
                rows={4}
                value={impact}
                onChange={(e) => setImpact(e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-brand-blue focus:border-brand-blue"
                placeholder={`40% reduction in time\n60% improvement in accuracy`}
              ></textarea>
            </div>
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
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <><Plus className="w-5 h-5 mr-2" /> Add Case Study</>}
          </button>
        </form>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-200">
          <h2 className="text-xl font-display font-semibold text-slate-900">Current Case Studies</h2>
        </div>
        <ul className="divide-y divide-slate-200">
          {caseStudies.map((item) => (
            <li key={item.id} className="p-6 flex items-center justify-between hover:bg-slate-50 transition-colors">
              <div className="flex items-center gap-4">
                {item.image_url && (
                  <img src={item.image_url} alt={item.title} className="w-16 h-12 rounded object-cover" />
                )}
                <div>
                  <h3 className="font-semibold text-slate-900">{item.title}</h3>
                  <p className="text-sm text-slate-500">Client: {item.client}</p>
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
          {caseStudies.length === 0 && (
            <li className="p-6 text-center text-slate-500">No case studies found.</li>
          )}
        </ul>
      </div>
    </div>
  );
}
