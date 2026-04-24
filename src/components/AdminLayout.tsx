import { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { 
  Users, 
  Handshake, 
  FileText, 
  Briefcase, 
  BookOpen, 
  LayoutTemplate, 
  MessageSquare,
  LogOut,
  LayoutDashboard,
  Menu,
  X
} from 'lucide-react';
import { cn } from '../lib/utils';

export default function AdminLayout() {
  const { signOut, user } = useAuth();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { name: 'Team Members', href: '/admin/team', icon: Users },
    { name: 'Partners', href: '/admin/partners', icon: Handshake },
    { name: 'Blog', href: '/admin/blog', icon: FileText },
    { name: 'Case Studies', href: '/admin/case-studies', icon: Briefcase },
    { name: 'E-Guides', href: '/admin/eguides', icon: BookOpen },
    { name: 'Playbooks', href: '/admin/playbooks', icon: LayoutTemplate },
    { name: 'Messages', href: '/admin/messages', icon: MessageSquare },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 z-20 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={cn(
        "bg-white border-r border-slate-200 flex flex-col fixed h-full z-30 transition-transform duration-300 w-64",
        isMobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      )}>
        <div className="h-16 flex items-center justify-between px-6 border-b border-slate-200">
          <Link to="/admin" className="font-display font-bold text-xl text-slate-900">
            Admin Portal
          </Link>
          <button 
            className="lg:hidden text-slate-500 hover:text-slate-700"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto py-4">
          <nav className="px-3 space-y-1">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href || (item.href !== '/admin' && location.pathname.startsWith(item.href));
              const Icon = item.icon;
              
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-colors group",
                    isActive 
                      ? "bg-brand-blue/10 text-brand-blue" 
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  )}
                >
                  <Icon className={cn(
                    "mr-3 flex-shrink-0 h-5 w-5",
                    isActive ? "text-brand-blue" : "text-slate-400 group-hover:text-slate-500"
                  )} />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="p-4 border-t border-slate-200">
          <div className="flex items-center px-3 py-2 mb-2 text-sm text-slate-600 font-medium truncate">
            {user?.email}
          </div>
          <button
            onClick={signOut}
            className="flex items-center w-full px-3 py-2.5 text-sm font-medium rounded-lg text-slate-600 hover:bg-red-50 hover:text-red-600 transition-colors group"
          >
            <LogOut className="mr-3 flex-shrink-0 h-5 w-5 text-slate-400 group-hover:text-red-500" />
            Sign Out
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen lg:ml-64 w-full">
        <header className="h-16 bg-white border-b border-slate-200 flex items-center px-4 lg:px-8 justify-between sticky top-0 z-10 w-full">
          <div className="flex items-center gap-4">
            <button 
              className="lg:hidden text-slate-500 hover:text-slate-700 p-2 -ml-2"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
            <h1 className="text-lg lg:text-xl font-display font-semibold text-slate-800 truncate">
              {navigation.find(n => n.href === location.pathname)?.name || 'Dashboard'}
            </h1>
          </div>
          <a href="/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-brand-blue hover:text-brand-blue-hover transition-colors whitespace-nowrap ml-4">
            <span className="hidden sm:inline">View Live Site</span>
            <span className="sm:hidden">Live Site</span> &rarr;
          </a>
        </header>
        
        <main className="flex-1 p-4 lg:p-8 overflow-x-hidden w-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

