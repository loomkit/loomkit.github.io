// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Loom',
      favicon: '/favicon.svg',
      logo: {
        src: './src/assets/loom.svg',
        alt: '🧵',
        replacesTitle: false,
      },
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/loomkit/starter' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
