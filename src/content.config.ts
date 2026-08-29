import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";

const faq = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/pages/sections/faq" }),
});

const packages = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/pages/sections/packages" }),
});

export const collections = { faq, packages };
