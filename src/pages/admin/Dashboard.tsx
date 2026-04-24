export default function AdminDashboard() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-display font-bold text-slate-900 mb-2">Welcome to the Admin Portal</h2>
        <p className="text-slate-600">Select an item from the sidebar to manage content.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="font-display font-semibold text-lg text-slate-900 mb-2">Quick Stats</h3>
          <p className="text-slate-500 text-sm">Dashboard overview coming soon.</p>
        </div>
      </div>
    </div>
  );
}
