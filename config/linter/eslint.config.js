import js from "@eslint/js";
import { defineConfig } from "eslint/config";

export default defineConfig
([
	{
		files: ["**/*.js"],
		plugins: {
			js,
		},
		extends: ["plugin:@eslint/js/recommended"],
		rules: {
			"no-unused-vars": "warn",
		},
	},
]);
