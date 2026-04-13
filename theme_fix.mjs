import fs from 'fs';
import path from 'path';

function traverse(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      traverse(fullPath);
    } else if (fullPath.endsWith('.tsx') && !fullPath.includes('Home.tsx') && !fullPath.includes('Layout.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      content = content.replace(/bg-navy-900/g, 'bg-white');
      content = content.replace(/bg-navy-800/g, 'bg-slate-50');
      content = content.replace(/text-white/g, 'text-slate-900');
      content = content.replace(/text-slate-400/g, 'text-slate-600');
      content = content.replace(/text-slate-300/g, 'text-slate-700');
      content = content.replace(/border-white\/5/g, 'border-slate-200');
      content = content.replace(/border-white\/10/g, 'border-slate-200');
      content = content.replace(/hover:bg-white\/5/g, 'hover:bg-slate-100');
      content = content.replace(/bg-white\/5/g, 'bg-slate-100');
      content = content.replace(/from-navy-800 to-navy-900/g, 'from-slate-50 to-white');
      
      fs.writeFileSync(fullPath, content, 'utf8');
    }
  }
}

traverse('\\\\wsl.localhost\\Ubuntu-24.04\\home\\kenny\\projects\\Macklemore-Solutions\\src\\pages');
console.log('Replaced dark theme classes in all pages except Home.tsx and Layout.tsx');
