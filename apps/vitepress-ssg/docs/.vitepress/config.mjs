import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: 'VitePress SSG',
	description: 'VitePress SSG',
	themeConfig: {
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'About', link: '/about.html' },
			{ text: 'Link', link: '/link.html' }
		],
		sidebar: false
	}
})
