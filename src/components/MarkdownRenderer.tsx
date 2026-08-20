import React from 'react';
import ReactMarkdown from 'react-markdown';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

export default function MarkdownRenderer({ content, className = "" }: MarkdownRendererProps) {
  if (!content) return null;

  return (
    <div className={`prose prose-slate max-w-none ${className}`}>
      <ReactMarkdown
        components={{
          h1: ({ ...props }) => (
            <h1 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mt-10 mb-5 leading-snug border-b border-slate-200 pb-3" {...props} />
          ),
          h2: ({ ...props }) => (
            <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-900 mt-8 mb-4 leading-snug" {...props} />
          ),
          h3: ({ ...props }) => (
            <h3 className="text-xl md:text-2xl font-display font-semibold text-slate-900 mt-6 mb-3 leading-snug text-brand-blue" {...props} />
          ),
          h4: ({ ...props }) => (
            <h4 className="text-lg md:text-xl font-display font-semibold text-slate-900 mt-5 mb-2" {...props} />
          ),
          p: ({ ...props }) => (
            <p className="mb-6 text-slate-700 leading-relaxed text-lg" {...props} />
          ),
          ul: ({ ...props }) => (
            <ul className="list-disc list-inside space-y-2 mb-6 text-slate-700 text-lg pl-2" {...props} />
          ),
          ol: ({ ...props }) => (
            <ol className="list-decimal list-inside space-y-2 mb-6 text-slate-700 text-lg pl-2" {...props} />
          ),
          li: ({ ...props }) => (
            <li className="text-slate-700 leading-relaxed" {...props} />
          ),
          blockquote: ({ ...props }) => (
            <blockquote className="border-l-4 border-brand-blue pl-4 py-3 my-6 bg-blue-50/50 italic text-slate-800 rounded-r-lg text-lg" {...props} />
          ),
          a: ({ ...props }) => (
            <a className="text-brand-blue font-semibold underline hover:text-blue-700 transition-colors" target="_blank" rel="noopener noreferrer" {...props} />
          ),
          strong: ({ ...props }) => (
            <strong className="font-bold text-slate-900" {...props} />
          ),
          em: ({ ...props }) => (
            <em className="italic text-slate-800" {...props} />
          ),
          code: ({ node, ...props }: any) => {
            const isInline = !node?.position || node.position.start.line === node.position.end.line;
            return isInline ? (
              <code className="bg-slate-100 text-brand-blue px-2 py-0.5 rounded text-sm font-mono border border-slate-200" {...props} />
            ) : (
              <pre className="bg-slate-900 text-slate-100 p-4 rounded-xl overflow-x-auto text-sm font-mono my-6 border border-slate-800">
                <code {...props} />
              </pre>
            );
          },
          hr: () => <hr className="my-8 border-slate-200" />,
          img: ({ ...props }) => (
            <img className="rounded-xl shadow-md my-6 max-h-[500px] w-full object-cover" {...props} />
          )
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
