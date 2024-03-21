// bundlers/esbuild/vitest.config.ts
import { defineConfig } from 'file:///Users/willcory/evmts-monorepo/node_modules/.pnpm/vitest@0.34.4_@vitest+ui@0.34.4/node_modules/vitest/dist/config.js'
const vitest_config_default = defineConfig({
	test: {
		include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
		coverage: {
			reporter: ['text', 'json-summary', 'json'],
			lines: 100,
			functions: 100,
			branches: 100,
			statements: 100,
			thresholdAutoUpdate: true,
		},
	},
})
export { vitest_config_default as default }
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiYnVuZGxlcnMvZXNidWlsZC92aXRlc3QuY29uZmlnLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL3dpbGxjb3J5L2V2bXRzLW1vbm9yZXBvL2J1bmRsZXJzL2VzYnVpbGRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy93aWxsY29yeS9ldm10cy1tb25vcmVwby9idW5kbGVycy9lc2J1aWxkL3ZpdGVzdC5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL3dpbGxjb3J5L2V2bXRzLW1vbm9yZXBvL2J1bmRsZXJzL2VzYnVpbGQvdml0ZXN0LmNvbmZpZy50c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGVzdC9jb25maWcnXG5cbi8vIGh0dHBzOi8vdml0ZXN0LmRldi9jb25maWcvIC0gZm9yIGRvY3NcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG5cdHRlc3Q6IHtcblx0XHRpbmNsdWRlOiBbJ3NyYy8qKi8qLnt0ZXN0LHNwZWN9LntqcyxtanMsY2pzLHRzLG10cyxjdHMsanN4LHRzeH0nXSxcblx0XHRjb3ZlcmFnZToge1xuXHRcdFx0cmVwb3J0ZXI6IFsndGV4dCcsICdqc29uLXN1bW1hcnknLCAnanNvbiddLFxuXHRcdFx0bGluZXM6IDEwMCxcblx0XHRcdGZ1bmN0aW9uczogMTAwLFxuXHRcdFx0YnJhbmNoZXM6IDEwMCxcblx0XHRcdHN0YXRlbWVudHM6IDEwMCxcblx0XHRcdHRocmVzaG9sZEF1dG9VcGRhdGU6IHRydWUsXG5cdFx0fSxcblx0fSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQW1VLFNBQVMsb0JBQW9CO0FBR2hXLElBQU8sd0JBQVEsYUFBYTtBQUFBLEVBQzNCLE1BQU07QUFBQSxJQUNMLFNBQVMsQ0FBQyxzREFBc0Q7QUFBQSxJQUNoRSxVQUFVO0FBQUEsTUFDVCxVQUFVLENBQUMsUUFBUSxnQkFBZ0IsTUFBTTtBQUFBLE1BQ3pDLE9BQU87QUFBQSxNQUNQLFdBQVc7QUFBQSxNQUNYLFVBQVU7QUFBQSxNQUNWLFlBQVk7QUFBQSxNQUNaLHFCQUFxQjtBQUFBLElBQ3RCO0FBQUEsRUFDRDtBQUNELENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==