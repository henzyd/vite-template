# Vite Template

## Introduction

The Vite Template is a project template designed to accelerate the setup of a modern web project using Vite and React. This template leverages Vite's fast development server to streamline the development process.

## Project Structure

The project follows a standard Vite structure, complemented by additional files designed to enhance the efficiency of the development setup process:

```plaintext
vite-template/
|-- .husky/
|-- public/
|-- src/
|   |-- assets/
|   |-- components/
|   |-- layouts/
|   |-- mutations/
|   |-- pages/
|   |-- providers/
|   |-- queries/
|   |-- utils/
|   |-- App.tsx
|   |-- App.css
|   |-- type.d.ts
|   |-- main.tsx
|   |-- index.css
|   |-- theme.tsx
|   |-- vite-env.d.ts
|-- .env.example
|-- .eslintrc.cjs
|-- .gitignore
|-- .prettierrc.json
|-- index.html
|-- package.json
|-- postcss.config.js
|-- README.md
|-- tailwind.config.js
|-- tsconfig.json
|-- tsconfig.node.json
|-- vite.config.js
|-- yarn.lock
```

- **.husky/**: Configurations for Git hooks using Husky.
- **public/**: Static assets and HTML files.
- **src/**: Main source code directory with:
  - **assets/**: Static files (images, fonts).
  - **components/**: Reusable React components.
  - **layouts/**: Components defining layout structure.
  - **mutations/**: State mutation files.
  - **pages/**: Top-level React components.
  - **providers/**: React context providers.
  - **queries/**: Data query-related files.
  - **utils/**: Utility functions.
  - **App.tsx**: Main app component.
  - **App.css**: Styles for the main component.
  - **type.d.ts**: TypeScript type definitions.
  - **main.tsx**: Another entry point file.
  - **index.css**: Global styles.
  - **theme.tsx**: Theme-related configurations.
  - **vite-env.d.ts**: Vite-specific environment variables.
- **.env.example**: Example file for environment variables.
- **.eslintrc.cjs**: ESLint configuration.
- **.gitignore**: Specifies ignored files for Git.
- **.prettierrc.json**: Prettier configuration.
- **index.html**: HTML entry point.
- **package.json**: Project configuration.
- **postcss.config.js**: PostCSS configuration.
- **README.md**: Project documentation.
- **tailwind.config.js**: Tailwind CSS configuration.
- **tsconfig.json**: TypeScript configuration.
- **tsconfig.node.json**: TypeScript configuration for Node.js.
- **vite.config.js**: Vite configuration.
- **yarn.lock**: Dependency lock file for Yarn.

## Scripts

### `dev`

Starts the development server using Vite.

```bash
yarn dev
```

### `build`

Builds the production-ready application.

```bash
yarn build
```

### `lint`

Lints TypeScript and TypeScript React files using ESLint.

```bash
yarn lint
```

### `preview`

Starts the Vite preview server.

```bash
yarn preview
```

### `format`

Formats code using Prettier.

```bash
yarn format
```

### `prepare`

Installs Husky Git hooks.

```bash
yarn prepare
```

## Conclusion

This template provides a foundation for building React-based dashboards with Vite. Customize it to fit your project requirements and enhance it with additional features as needed. Happy coding!

---

Made by [@henzyd](https://github.com/henzyd)
