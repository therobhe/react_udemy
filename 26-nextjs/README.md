# Section 26: Next.JS

A React framework that enables us to build server-rendered React app and moreover, create full-stack applications.

## Notes

### Folder structure

- inside the `app` folder, all routes are defined.
- to be a route, the folder must contain an `page.js` file.
- an optional `layout.js` wraps the page.js, therefore we can create layouts with navigations e.g.
- you can mark folders with `_` in order to tell Next.JS that they are private routes.
- if you wrap a folder with `(title)` the title will not become part of the URL.

##### For you

There are many good practices for organizing Next.JS projects:

- put routes in app folder
- use a components/lib/hooks folder in the root of the project

### Meta Informations

- in the ``RootLayout`` you create a `const metadata` where you configure the title and description of the page.
- an `ìcon.png` in the root of the /app folder will be used as favicon.
- `globals.css` in the root of the /app folder will be used as global style.
- dynamic routes (e.g. different blog posts) can be created like this `/blog/[slug]`
