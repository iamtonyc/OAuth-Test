# oauth-test

Simple React app (Vite) set up for Netlify.

Quick deploy

- Install deps and build locally:

```powershell
cd C:\tony\dev\workspace\React\OAuth.Test\oauth-test
npm install
npm run build
```

- To deploy on Netlify via GitHub Actions:
  1. Create a site on Netlify (or get an existing site's ID).
 2. In your GitHub repo, add repository secrets `NETLIFY_AUTH_TOKEN` and `NETLIFY_SITE_ID`.
 3. Push to the `main` branch — the workflow will run and deploy the `dist` folder.

If you prefer using Netlify UI, connect the repo and set the build command to `npm run build` and the publish directory to `dist`.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
