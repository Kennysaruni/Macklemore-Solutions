import fs from 'fs';
const src = 'C:/Users/Kenny/.gemini/antigravity/brain/a84ce9e5-95ad-4100-85a4-db0c12148ee9/smart_city_hero_bg_1776072380854.png';
const dest = '\\\\wsl.localhost\\Ubuntu-24.04\\home\\kenny\\projects\\Macklemore-Solutions\\public\\hero-bg.png';
try {
  fs.mkdirSync('\\\\wsl.localhost\\Ubuntu-24.04\\home\\kenny\\projects\\Macklemore-Solutions\\public', { recursive: true });
  fs.copyFileSync(src, dest);
  console.log('Done!');
} catch (e) {
  console.error(e);
}
