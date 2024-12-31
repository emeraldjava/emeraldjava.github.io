import { defineConfig, passthroughImageService } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import sitemap from "@astrojs/sitemap";
import { SITE } from "./src/config";

// https://astro.build/config
export default defineConfig({
  // https://docs.astro.build/en/reference/configuration-reference/#site
  // see https://config.tips/c/astro/dynamic-astro-site-value/
  site: import.meta.env.DEV
    ? "http://localhost:4321"
    : "https://emeraldjava.github.io/",
  // See https://github.com/withastro/astro/issues/5512
  // https://docs.astro.build/en/guides/environment-variables/
  // https://vitejs.dev/guide/env-and-mode.html#env-files
  //base: import.meta.env.DEV ? "." : "/emeraldjava-astro",
  //base: import.meta.env.VITE_BASE,
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
    sitemap(),
  ],
  image: {
    // see https://docs.astro.build/en/reference/errors/missing-sharp/
    service: passthroughImageService(),
  },
  markdown: {
    remarkPlugins: [
      remarkToc,
      [
        remarkCollapse,
        {
          test: "Table of contents",
        },
      ],
    ],
    shikiConfig: {
      // For more themes, visit https://shiki.style/themes
      themes: { light: "min-light", dark: "night-owl" },
      wrap: true,
    },
  },
  vite: {
    // build: {
    //   rollupOptions: {
    //     output: {
    //       entryFileNames: '[name]-[hash].js',
    //     }
    //   }
    // },
    plugins: [rawFonts(['.ttf'])],
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },
  scopedStyleStrategy: "where",
  experimental: {
    contentLayer: true,
  },
  // https://about.gitlab.com/blog/2022/10/24/publishing-an-astro-site-with-pages/
  // GitLab Pages requires exposed files to be located in a folder called "public".
  // So we're instructing Astro to put the static build output in a folder of that name.
  outDir: "./dist",
});

function rawFonts(ext) {
  return {
    name: 'vite-plugin-raw-fonts',
    transform(_, id) {
      if (ext.some(e => id.endsWith(e))) {
        const buffer = fs.readFileSync(id);
        return {
          code: `export default ${JSON.stringify(buffer)}`,
          map: null
        };
      }
    }
  };
}
