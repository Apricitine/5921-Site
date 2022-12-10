import rss from '@astrojs/rss';
import { SITE_TITLE } from '../config';

export const get = () =>
	rss({
		title: SITE_TITLE,
		site: import.meta.env.SITE,
		items: import.meta.glob('./blog/**/*.{md,mdx}'),
	});