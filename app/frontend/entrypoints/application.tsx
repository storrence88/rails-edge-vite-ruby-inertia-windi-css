console.log("Vite ⚡️ Rails");
console.log("Visit the guide for more information: ", "https://vite-ruby.netlify.app/guide/rails");

import React from "react";
import { render } from "react-dom";
import { createInertiaApp } from "@inertiajs/inertia-react";
import "virtual:windi.css";
import "virtual:windi-base.css";
import "virtual:windi-components.css";
import "virtual:windi-utilities.css";

// @ts-ignore
const pages = import.meta.globEager("../Pages/**/**.tsx");

createInertiaApp({
  // resolve: name => require(`./Pages/${name}`),
  resolve: (name: String) => pages[`../Pages/${name}.tsx`],
  setup({ el, App, props }) {
    render(<App {...props} />, el);
  }
});

// Example: Load Rails libraries in Vite.
//
// import '@rails/ujs'
//
// import Turbolinks from 'turbolinks'
// import ActiveStorage from '@rails/activestorage'
//
// // Import all channels.
// import.meta.globEager('./**/*_channel.js')
//
// Turbolinks.start()
// ActiveStorage.start()

// Example: Import a stylesheet in app/frontend/index.css
// import '~/index.css'
