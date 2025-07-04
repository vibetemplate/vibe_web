import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Section-specific color themes
        section: {
          hero: {
            primary: '#0F172A',
            secondary: '#1E3A8A',
            accent: '#0EA5E9',
          },
          pain: {
            primary: '#1E1B4B',
            secondary: '#6B46C1',
            accent: '#8B5CF6',
          },
          solution: {
            primary: '#064E3B',
            secondary: '#059669',
            accent: '#10B981',
          },
          products: {
            primary: '#EA580C',
            secondary: '#F59E0B',
            accent: '#FCD34D',
          },
          users: {
            primary: '#155E75',
            secondary: '#0891B2',
            accent: '#22D3EE',
          },
          tech: {
            primary: '#9F1239',
            secondary: '#EC4899',
            accent: '#F472B6',
          },
          cases: {
            primary: '#92400E',
            secondary: '#F59E0B',
            accent: '#FCD34D',
          },
          pricing: {
            primary: '#374151',
            secondary: '#6B7280',
            accent: '#9CA3AF',
          },
        },
      },
      fontFamily: {
        sans: ['Inter', 'PingFang SC', 'Microsoft YaHei', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'hero': ['4rem', { lineHeight: '1.2', fontWeight: '700' }],
        'title': ['2.5rem', { lineHeight: '1.3', fontWeight: '600' }],
        'subtitle': ['1.5rem', { lineHeight: '1.4', fontWeight: '500' }],
        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
      },
      animation: {
        'code-rain': 'codeRain 20s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        codeRain: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { textShadow: '0 0 20px #0EA5E9' },
          '100%': { textShadow: '0 0 30px #0EA5E9, 0 0 40px #0EA5E9' },
        },
      },
    },
  },
  plugins: [],
}
export default config