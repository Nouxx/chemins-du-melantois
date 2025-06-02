# Chemins du Mélantois

Static website bundled with [Astro](https://astro.build/), [Tailwind CSS](https://tailwindcss.com) and [Preline UI](https://preline.co), forked from [ScrewFast](https://github.com/mearashadowfax/ScrewFast).

## Getting Started

### Prerequisite

- Install Node
- Install git
- Login or Sign up to GitHub
- Clone the repository

### Installation

Start by installing the project dependencies. Open your terminal, navigate to the project's root directory, and execute:

```bash
npm install
```

This command will install all the necessary dependencies defined in the `package.json` file.

### Development Commands

With dependencies installed, you can run the following npm scripts to manage your project's development lifecycle:

- `npm run dev`: Starts a local development server with hot reloading enabled.
- `npm run preview`: Serves your build output locally for preview before deployment.
- `npm run build`: Bundles your site into static files for production.

For detailed help with Astro CLI commands, visit [Astro's documentation](https://docs.astro.build/en/reference/cli-reference/).

## Deployment

Deploying the website is fully automated with GitHub Actions and deployed to GitHub Pages.

The latest commit pushed on `main` will be deployed straight to production.

## License

This project is released under the MIT License. Please read the [LICENSE](https://github.com/mearashadowfax/ScrewFast/blob/main/LICENSE) file for more details.

**Note:** This website template has no affiliation with the companies displayed. Logos are used for demonstration purposes only and should be replaced in customized versions.

export NODE_TLS_REJECT_UNAUTHORIZED=0
