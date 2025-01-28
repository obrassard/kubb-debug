import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: ['./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      borderRadius: {
        xl: 'calc(var(--radius) + 6px)',
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          dark: 'hsl(from hsl(var(--primary)) h s calc(l - 5))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          dark: 'hsl(from hsl(var(--secondary)) h s calc(l - 5))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          dark: 'hsl(from hsl(var(--destructive)) h s calc(l - 5))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        success: {
          DEFAULT: 'hsl(var(--success))',
          dark: 'hsl(from hsl(var(--success)) h s calc(l - 5))',
          foreground: 'hsl(var(--success-foreground))',
        },
        warning: {
          DEFAULT: 'hsl(var(--warning))',
          dark: 'hsl(from hsl(var(--warning)) h s calc(l - 5))',
          foreground: 'hsl(var(--warning-foreground))',
        },
        info: {
          DEFAULT: 'hsl(var(--info))',
          dark: 'hsl(from hsl(var(--info)) h s calc(l - 5))',
          foreground: 'hsl(var(--info-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        'caret-blink': {
          '0%,70%,100%': { opacity: '1' },
          '20%,50%': { opacity: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'caret-blink': 'caret-blink 1.25s ease-out infinite',
        'spin-loader': 'spin 2s linear infinite',
      },
      fontWeight: {
        thin: 'calc(var(--font-weight) * 100)',
        extralight: 'calc(var(--font-weight) * 200)',
        light: 'calc(var(--font-weight) * 300)',
        normal: 'calc(var(--font-weight) * 400)',
        medium: 'calc(var(--font-weight) * 500)',
        semibold: 'calc(var(--font-weight) * 600)',
        bold: 'calc(var(--font-weight) * 700)',
        extrabold: 'calc(var(--font-weight) * 800)',
        black: 'calc(var(--font-weight) * 900)',
      },
      fontSize: {
        // TODO Those values could be defined as rem only, and setting the base font size in the root element with --font-size
        xs: ['calc(var(--font-size) * 0.75rem)', 'calc(var(--font-size) * 1rem)'],
        sm: ['calc(var(--font-size) * 0.875rem)', 'calc(var(--font-size) * 1.25rem)'],
        base: ['calc(var(--font-size) * 1rem)', 'calc(var(--font-size) * 1.5rem)'],
        lg: ['calc(var(--font-size) * 1.125rem)', 'calc(var(--font-size) * 1.75rem)'],
        xl: ['calc(var(--font-size) * 1.25rem)', 'calc(var(--font-size) * 1.75rem)'],
        '2xl': ['calc(var(--font-size) * 1.5rem)', 'calc(var(--font-size) * 2rem)'],
        '3xl': ['calc(var(--font-size) * 1.875rem)', 'calc(var(--font-size) * 2.25rem)'],
        '4xl': ['calc(var(--font-size) * 2.25rem)', 'calc(var(--font-size) * 2.5rem)'],
        '5xl': ['calc(var(--font-size) * 3rem)', 'calc(var(--font-size) * 3rem)'],
        '6xl': ['calc(var(--font-size) * 3.75rem)', 'calc(var(--font-size) * 3.5rem)'],
        '7xl': ['calc(var(--font-size) * 4.5rem)', 'calc(var(--font-size) * 4rem)'],
        '8xl': ['calc(var(--font-size) * 6rem)', 'calc(var(--font-size) * 5.5rem)'],
        '9xl': ['calc(var(--font-size) * 8rem)', 'calc(var(--font-size) * 7rem)'],
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
