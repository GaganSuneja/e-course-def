/**
 * Created by ajaykumar on 25/05/20
 */

module.exports = {
  plugins: [
    'tailwindcss',
    process.env.NODE_ENV === 'production'
      ? [
        '@fullhuman/postcss-purgecss',
        {
          content: [
            './pages/**/*.{js,jsx,ts,tsx}',
            './components/**/*.{js,jsx,ts,tsx}',
          ],
          defaultExtractor: (content) =>
            content.match(/[\w-/:]+(?<!:)/g) || [],
        },
      ]
      : undefined,
    'autoprefixer',
  ],
};