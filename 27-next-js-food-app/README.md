# Section 27: Next.js Food App

## Learnings

- try to minimize the stuff that needs to be rendered on the client side by using "use client" on the most outer leaf of
  your component tree --> the main content comes from the server and gets hydrated on the client side
- SQLite is a good choice for a local database ``npm i better-sqlite3``
    - create a setup script that creates the database and the tables
    - then execute this script via `node setup.js` --> creates a `.db` file (this can be seen in Webstorms Database
      Explorer)
    - then create a function that uses the npm package to connect to the database and write your query for extracting
      information:
        - ``const db = sql("DB_NAME.db")``
        - e.g. ``db.prepare('SELECT * FROM meals').all();``
        - use the result in your component
