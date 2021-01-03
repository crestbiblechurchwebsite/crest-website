# Crest Bible Church Website

This is the source for the www.crestbiblechurch.org website.

## Development

Tools used: [Nunjucks](https://mozilla.github.io/nunjucks/) for templating, [Tailwindcss](https://tailwindcss.com/) for styles, and [Alpine.js](https://github.com/alpinejs/alpine) for the small amount of javascript required.

To run things locally for development:

1. Install [node and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).
2. Clone this repository.
3. In the root of the repository run ```npm install ```
4. In the root of the repository run ```npm run dev```

Building for production is similar, but run ```npm run prod``` instead of ```npm run dev```. The "dist" folder will be the docroot of the website.
