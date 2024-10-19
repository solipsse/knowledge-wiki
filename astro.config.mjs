import markdoc from '@astrojs/markdoc';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import rehypeMathJax from 'rehype-mathjax';
import remarkMath from 'remark-math';
// https://astro.build/config
export default defineConfig({
    markdown: {
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeMathJax],
    },
    integrations: [markdoc({remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeMathJax],}), starlight({
            logo: {
                src: './public/favicon.svg',
                },
        title: { en: '_wiki', jp: '知識ベース' },
        locales: {
            // English docs in `src/content/docs/en/`
            root: {
                label: 'English',
                lang: 'en',
            },
            jp: {
                label: '日本'
            }
        },
        social: { github: 'https://github.com/solipsse/wiki' },
        editLink: { baseUrl: 'https://github.com/solipsse/wiki/edit/main'},
        sidebar: [
            {label: 'Exam Preparation', autogenerate: { directory: 'exam' } },
            { label: 'Guides', items: [{ label: 'Getting started', slug: 'guides'}, { label: 'Typing tools', slug:'guides/editor' }] },
            {label: 'Physic', autogenerate: { directory: 'physics' } },
            {label: 'Math', autogenerate: { directory: 'maths' } },
            {label: 'Learning Science', autogenerate: { directory: 'learn' } },
            {label: 'Computer Science', autogenerate: { directory: 'cs' } },
            {label: '9618 CS CIE', autogenerate: { directory: 'a2-cs' } },
            // { label: 'Reference', autogenerate: { directory: 'reference' } },
        ],
        customCss: ['./src/mathjax.css','./src/tailwind.css' /*'./src/custom-styles.css', '@fontsource/roboto'*/],
        expressiveCode: {
            // You can use any of the themes bundled with Shiki by name,
            // specify a path to JSON theme file, or pass an instance
            // of the `ExpressiveCodeTheme` class here:
            // themes: ['dracula', 'solarized-light'],
            shiki: {
                // You can pass additional plugin options here,
                // e.g. to load custom language grammars:
                langs: [
                    // import('./some-exported-grammar.mjs'),
                    // JSON.parse(fs.readFileSync('./some-json-grammar.json', 'utf-8'))
                ],
            },
        },
        }), tailwind({applyBaseStyles: false})],

});
