# razhangwei.github.io

Source for [razhangwei.github.io](https://razhangwei.github.io/) — Wei Zhang's personal site and blog.

Built with [Astro](https://astro.build/) on the [AstroPaper](https://github.com/satnaing/astro-paper) theme. Deployed to GitHub Pages via the workflow in `.github/workflows/deploy.yml`.

## Posts

Live in `src/content/posts/` as `.md` / `.mdx` files. See `src/content.config.ts` for the required frontmatter schema.

## Local dev

```bash
pnpm install
pnpm dev      # http://localhost:4321
pnpm build    # static output to ./dist
```

## License

Content (posts, about, etc.) is © Wei Zhang.

Theme is MIT-licensed by Sat Naing — see [LICENSE](./LICENSE).
