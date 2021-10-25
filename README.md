# Rails 7.0 alpha + Vite Ruby + Inertia.js + WindiCSS

This repo utilizes:
- [Rails 7.0 alpha](https://rubygems.org/gems/rails/versions/7.0.0.alpha2), which is the latest alpha release for Rails.
- [Vite Ruby](https://vite-ruby.netlify.app/guide/introduction.html), a build tool that aims to provide a faster and leaner development experience for modern web projects.
- [Inertia.js](https://inertiajs.com/), which allows you to create fully client-side rendered, single-page apps, without much of the complexity that comes with modern SPAs. It does this by leveraging existing server-side frameworks.
- [WindiCSS](https://windicss.org/), a utility-first CSS framework for rapid UI development alternative to TailwindCSS


### Included gems

- [vite_rails](https://vite-ruby.netlify.app/guide/)
- [inertia_rails](https://inertiajs.com/server-side-setup)


### Vite Ruby vs Webpack(er)

The default in Rails 6 is to use Webpacker by default but it can become extremely slow to recompile especially as your application grows. Rails 7 has made a push to move away from Webpacker by providing other bundling options which include [ESBuild](https://esbuild.github.io/) as well as [importmap](https://github.com/rails/importmap-rails). However, [Vite](https://vitejs.dev/guide/why.html) is another possible answer to this issue with some extra features not found with ESBuild.

Vite consists of two major parts:

- A dev server that provides rich feature enhancements over native ES modules, for example extremely fast Hot Module Replacement (HMR).

- A build command that bundles your code with Rollup, pre-configured to output highly optimized static assets for production.


### Skipping Webpacker

Because Rails 6.1 ships with webpacker by default we need to skip installing it all together when creating a new app. The main flags you need are `--skip-webpack-install` and `--skip-javascript`.

**Important** - using these flags means **zero** javascript gets added to the app so you'll need to add libraries as you go.

⬇️  Clone the repo

```bash
https://github.com/storrence88/rails-edge-vite-ruby-inertia-windi-css.git
```

### Once installed what do I get?

- Vite + WindiCSS configured in the `app/frontend` directory.
- Inertia.js provides the ability to write your frontend using React components with props passed in from a Rails controller.
- Enhanced CSS using WindiCSS.

### Boot it up

`$ bin/rails s`

### Boot up the Vite dev server

`$ bin/vite dev`


### Extending Vite

Check out the [Vite Ruby website](https://vite-ruby.netlify.app/) for more configuration options plus additional plugins.
