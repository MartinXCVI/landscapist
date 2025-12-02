# Landscapist

![Landscapist cover screenshot](./public/images/landscapist-cover.png 'Landscapist in desktop version')

## 📄 Introduction

Clean and beautiful design for a **landscapist**/**landscaper**, **gardener**, or **arborist** website alternatively. Standard structure of 6 pages: *Home*, *About*, *Works*, *Services*, *Contact*, and *Error* page.

Use of **AOS** libraries for animations on scroll. Styling with **SASS** for a clearer, maintainable and efficient development. Contact form functions with **Web3Forms**.

### Developed with:

- Astro Framework
- TypeScript
- SASS
- AOS (Animate on Scroll)
- Web3Forms

---

## 👁️ View of the Project

### Clone it

Copy the command below with the link:

```bash
git clone https://github.com/MartinXCVI/landscapist.git
cd landscapist
```

#### Install Dependencies

```bash
npm install
```

#### Environment Variables

First, [get your Web3Forms key here](https://web3forms.com/). Then create a `.env` file in the root directory and configure the following variable:

```
WEB3_FORMS_API_KEY=<Your_Web3Forms_API_Key_Here>
```

#### Configuration

1. Update `src/config/site.config.ts` with your business information
2. Update `src/config/env.ts` to add more environment variables
3. Customize colors in `src/sass/includes/_colors.scss`

#### Routes

All routes are centrally managed in `src/config/routes.config.ts`. 

##### Adding a New Page

1. Define the route:
```typescript
// src/config/routes.config.ts
export const routes = {
  // ...existing routes
  newPage: {
    label: 'New Page',
    href: '/new-page',
    description: 'Description for SEO',
  },
}
```

2. Add to navigation:
```typescript
nav: [
  // ...existing routes
  { label: routes.newPage.label, href: routes.newPage.href },
]
```

3. Create the page: `src/pages/new-page.astro`

That's it! The route is now available throughout the site.

#### Run The Project Locally:

```bash
npm run dev
```

---

## 🚀 Deployed on Vercel

[**Click here to see it live**](https://landscapist.vercel.app/)

---

## 💻 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
| `npm run styles`          | Compile .sass and .scss files to .css files      |
|                           |                                                  |

---

## 📚 Learn More

- [Astro official documentation](https://docs.astro.build)
- [TypeScript official documentation](https://www.typescriptlang.org/docs/)
- [Astro Discord server](https://astro.build/chat)
- [SASS official documentation](https://sass-lang.com/)
- [AOS repository](https://github.com/michalsnik/aos/tree/v2)
- [Web3Forms official documentation](https://web3forms.com/)

---

## 📝 Attributions

"Leaf" icon created by <a href="https://www.flaticon.com/free-icons/leaf" title="Landscapist logo">Roundicons - Flaticon</a>

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

## 🧑‍💻 Developer

- [**MartinXCVI**](https://github.com/MartinXCVI)