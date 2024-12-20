import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{ts,tsx}', './content/**/*.mdx', './public/**/*.svg'],
  future: {
    hoverOnlyWhenSupported: true,
  },
} satisfies Config;
