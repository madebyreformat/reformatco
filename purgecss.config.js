module.exports = {
  content: ['site/layouts/**/*.html'],
  whitelist: ['loading', 'nav-active', 'single-work'],
  extractors: [
    {
      extensions: ['html', 'svg', 'js'],
      extractor: class TailwindExtractor {
        static extract (content) {
          return content.match(/[A-Za-z0-9-_:/]+/g) || []
        }
      },
    },
  ],
}