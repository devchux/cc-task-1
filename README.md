# Capital Placement Task 1


This application is designed for local execution only. Obtain the [Swagger schema (in YAML format)](https://www.dropbox.com/s/cf92anqoqlg6p19/Application%20Form.yaml?dl=0) or use the 'api.yaml' in the root folder from this project and simulate the API endpoints using [Prism](https://docs.stoplight.io/docs/prism/674b27b261c3c-overview). Update the URL in the 'constants.ts' file in the 'util' folder with the 'GET' and 'PUT' URLs provided by Prism's mock, and ideally, all functionalities should function seamlessly.

## Steps

- Install and set up [Prism](https://docs.stoplight.io/docs/prism/674b27b261c3c-overview)
- Run 'prism mock api.yaml'
- Run 'yarn'
- Run 'yarn run dev'

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
