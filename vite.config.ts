import { defineConfig, type Plugin } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

const PAGE_TITLE = "닥터도자기 마스크팩 홈페이지에 오신 것을 환영합니다";
const PAGE_DESC  = "도자기의원에서 시작된 닥터도자기 데일리 하이드라케어 마스크팩 — 메나다이온과 핵심 보습 성분으로 피부 본연의 생기를 채워드립니다.";

function htmlHeadPlugin(): Plugin {
  return {
    name: 'html-head-meta',
    transformIndexHtml(html) {
      const inject = [
        `<title>${PAGE_TITLE}</title>`,
        `<meta name="robots" content="index, follow">`,
        `<link rel="icon" type="image/x-icon" href="/favicon.ico">`,
        `<link rel="shortcut icon" href="/favicon.ico">`,
        `<meta name="description" content="${PAGE_DESC}">`,
        `<meta property="og:type" content="website">`,
        `<meta property="og:title" content="${PAGE_TITLE}">`,
        `<meta property="og:description" content="${PAGE_DESC}">`,
        `<meta property="og:image" content="/favicon.png">`,
        `<meta name="twitter:card" content="summary_large_image">`,
        `<meta name="twitter:title" content="${PAGE_TITLE}">`,
        `<meta name="twitter:description" content="${PAGE_DESC}">`,
        `<meta name="twitter:image" content="/favicon.png">`,
      ].join('\n    ');
      // Remove any existing noindex injected by platform defaults
      const cleaned = html.replace(/<meta[^>]+content=["'][^"']*noindex[^"']*["'][^>]*>/gi, '');
      return cleaned.replace(/<head>/, `<head>\n    ${inject}`);
    },
  };
}


function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

export default defineConfig({
  plugins: [
    figmaAssetResolver(),
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
    htmlHeadPlugin(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
