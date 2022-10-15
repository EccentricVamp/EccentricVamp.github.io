import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import { defaultLayout } from "astro-default-layout";

export default defineConfig({
	integrations: [tailwind()],
	site: "https://eccentricvamp.github.io",
	markdown: {
		remarkPlugins: [defaultLayout],
		extendDefaultPlugins: true
	}
});