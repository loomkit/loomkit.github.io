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
			social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/loomkit' },
        { icon: 'twitter', label: '𝕏', href: 'https://x.com/loomkit' },
      ],
			sidebar: [
				{
					label: 'Guides',
					items: [
						{ label: 'Getting Started', slug: 'guides/getting-started' },
						{ label: 'Starter Kit', slug: 'guides/starter-kit' },
						{ label: 'Core', slug: 'guides/core' },
					],
				},
				{
					label: 'Concepts',
					autogenerate: { directory: 'concepts' },
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
