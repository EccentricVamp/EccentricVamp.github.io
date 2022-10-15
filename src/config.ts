export const SITE = {
	title: 'EccentricVamp',
	description: 'EccentricVamp\'s personal website',
	language: 'en-US',
};

// This is the type of the frontmatter you put in the docs markdown files.
export type Frontmatter = {
	title: string;
	description: string;
	layout: string;
	image?: { src: string; alt: string };
};

export const EDIT_URL = `https://github.com/EccentricVamp/eccentricvamp.github.io/tree/main`;

export type Sidebar = Record<string, { text: string; link: string }[]>;
export const SIDEBAR: Sidebar = {};
