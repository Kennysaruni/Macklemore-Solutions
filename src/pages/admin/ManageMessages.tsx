import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { Loader2, Mail } from 'lucide-react';

interface Message {
  id: string;
  name: string;
  email: string;
  company: string;
  message: string;
  created_at: string;
}

export default function ManageMessages() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const { data, error } = await supabase
        .from('messages')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setMessages(data || []);
    } catch (error) {
      console.error('Error fetching messages:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-200 flex justify-between items-center">
          <h2 className="text-xl font-display font-semibold text-slate-900">Contact Form Submissions</h2>
          <button onClick={fetchMessages} className="text-sm font-medium text-brand-blue hover:underline">
            Refresh
          </button>
        </div>
        
        {loading ? (
          <div className="p-12 flex justify-center">
            <Loader2 className="w-8 h-8 animate-spin text-brand-blue" />
          </div>
        ) : (
          <ul className="divide-y divide-slate-200">
            {messages.map((msg) => (
              <li key={msg.id} className="p-6 hover:bg-slate-50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-2 bg-brand-blue/10 rounded-full text-brand-blue flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-lg font-semibold text-slate-900 truncate">
                        {msg.name} <span className="text-slate-500 font-normal text-sm">from {msg.company || 'Unknown Company'}</span>
                      </h3>
                      <span className="text-xs text-slate-500 whitespace-nowrap">
                        {new Date(msg.created_at).toLocaleString()}
                      </span>
                    </div>
                    <a href={`mailto:${msg.email}`} className="text-sm text-brand-blue hover:underline mb-3 inline-block">
                      {msg.email}
                    </a>
                    <div className="bg-white p-4 rounded-lg border border-slate-100 text-slate-700 text-sm whitespace-pre-wrap">
                      {msg.message}
                    </div>
                  </div>
                </div>
              </li>
            ))}
            {messages.length === 0 && (
              <li className="p-12 text-center text-slate-500">
                No messages found.
              </li>
            )}
          </ul>
        )}
      </div>
    </div>
  );
}
