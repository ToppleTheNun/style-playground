import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import rehypePrettyCode from "rehype-pretty-code";

export default defineConfig(async () => {
  const mdx = await import("@mdx-js/rollup");
  return {
    optimizeDeps: {
      include: ["react/jsx-runtime"],
    },
    plugins: [
      { enforce: "pre", ...mdx.default({ remarkPlugins: [rehypePrettyCode] }) },
      react(),
    ],
  };
});
