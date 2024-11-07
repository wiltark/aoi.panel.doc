import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Aoi.Panel Doc",
      social: {
        github: "https://github.com/AkaruiDevelopment/aoi.panel",
      },
      sidebar: [
        {
          label: "Getting Started",
          link: "/gettingstarted",
        },
        {
          label: "Custom panel",
          autogenerate: { directory: "Custom" },
        },
      ],
    }),
  ],
});
