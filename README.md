# Safi — Developer Portfolio

**🔗 Live at [safii.dev](https://safii.dev)**

A personal developer portfolio built on WordPress — not as a blog with a theme slapped on, but as a real content architecture (custom post type, taxonomies, REST API) driving a cinematic, restrained 3D homepage. No page builder, no bloated plugins: a site-specific theme and a site-specific plugin, built from scratch.

## The idea

The homepage is a minimal 3D developer workspace rendered in WebGL. Instead of a nav bar, you interact with the room itself:

| Object | Leads to |
|---|---|
| 🖥️ Monitor | Projects |
| 📓 Notebook | About |
| 📱 Phone | Contact |
| 💻 Terminal | GitHub / Résumé |
| 💡 Lamp | Toggles the scene's lighting |

The scene is deliberately spare — one lit room, a handful of interactive objects, subtle sound on interaction, and smooth camera/page transitions — rather than a dense, over-decorated 3D showcase. Desktop and mobile get distinct, purpose-built compositions instead of one scene squeezed to fit both.

## Features

- **3D workspace homepage** — Three.js scene with object interaction, lamp-driven lighting, and a real (non-JS) fallback layout for when WebGL isn't available
- **Scroll-driven Projects showcase** — every published project on one continuous page, not a paginated grid
- **Custom `project` post type** — with `project_category` and `technology` taxonomies, plus meta fields (GitHub URL, live demo URL, featured flag)
- **`/wp-json/portfolio/v1/graph` REST endpoint** — projects and technologies exposed as a graph (nodes + edges), cached via a transient and invalidated on content changes
- **Native contact form** — plain `admin-post.php` handling, honeypot spam check, no form-builder plugin
- **Editorial About / Contact pages** — real content, not filler
- **Sound design** — restrained UI sound on interaction, not background music
- **Customizer-driven personal links** — GitHub, résumé, LinkedIn, email as simple Customizer settings, not hardcoded or plugin-owned

## Tech stack

- **WordPress** — custom theme + a single site-specific plugin owning the content architecture (no ACF, no page builder)
- **Three.js** — the 3D scene
- **GSAP** — animation and page-transition choreography
- **Vite + Tailwind CSS v4** — theme build pipeline
- **SQLite** in local development (via the official SQLite Database Integration plugin) / **MariaDB** in production

## Project structure

```
wp-content/
├── themes/portfolio-theme/       # All visual/template logic
│   ├── src/js/workspace/         # The 3D homepage scene, interaction, sound
│   ├── src/js/projects-showcase/ # Scroll-driven Projects archive
│   ├── src/css/                  # Tailwind entry point
│   ├── template-*.php            # About / Contact templates
│   ├── single-project.php        # Individual project pages
│   ├── archive-project.php       # Projects showcase
│   └── functions.php             # Theme setup, asset enqueue, Customizer, contact form
└── plugins/portfolio-content/    # All content architecture, zero visual logic
    └── includes/
        ├── class-cpt-project.php
        ├── class-taxonomy-project-category.php
        ├── class-taxonomy-technology.php
        ├── class-project-meta.php
        └── class-rest-graph.php
```

The theme owns *how things look*; the plugin owns *what content exists*. Deactivating the theme and switching to a default one wouldn't lose a single project.

## Local development

```bash
# Theme build (Vite)
cd wp-content/themes/portfolio-theme
npm install
npm run dev     # watch mode
npm run build   # production build (output is committed to dist/)
```

WordPress itself runs locally via the [SQLite Database Integration](https://wordpress.org/plugins/sqlite-database-integration/) plugin against PHP's built-in server — no MySQL required for local development.

## Production

Deployed on an Nginx + PHP-FPM + MariaDB stack, HTTPS via Let's Encrypt, proxied through Cloudflare (Full Strict). Content is portable between dev (SQLite) and production (MariaDB) via WordPress's standard export/import — no raw SQL surgery.

## License

Personal project — all rights reserved. Feel free to look around, but this isn't a template to fork and relaunch as your own portfolio.
