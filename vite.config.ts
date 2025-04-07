import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		host: true,
		port: 3000,
		cors: {
			origin: ["http://localhost:3000"],
			methods: ["GET", "POST"],
			allowedHeaders: ["Content-Type"],
		},
		fs: {
			deny: ["restricted-folder", "/absolute/path/to/deny"],
		},
	},
	resolve: {
		alias: {
			components: path.resolve(__dirname, "./src/components"),
			config: path.resolve(__dirname, "./src/config"),
			assets: path.resolve(__dirname, "./src/assets"),
			hoc: path.resolve(__dirname, "./src/hoc"),
			hooks: path.resolve(__dirname, "./src/hooks"),
			interfaces: path.resolve(__dirname, "./src/interfaces"),
			lib: path.resolve(__dirname, "./src/lib"),
			store: path.resolve(__dirname, "./src/store"),
			utils: path.resolve(__dirname, "./src/utils"),
			routes: path.resolve(__dirname, "./src/routes"),
			layouts: path.resolve(__dirname, "./src/layouts"),
			pages: path.resolve(__dirname, "./src/pages"),
		},
	},
});
