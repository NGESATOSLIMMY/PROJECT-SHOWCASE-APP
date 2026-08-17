## Robux Store Admin
A React-based Single Page Application for managing a catalog of Robux packages — built as a class project demo showcasing full CRUD functionality, routing, custom hooks, and testing.

This is an admin dashboard, not a real storefront: it does not process real payments or real Robux, and is not affiliated with Roblox Corporation.

Features
Browse all Robux packages on page load
Search/filter packages by name in real time
Add a new package via a form
Edit an existing package (e.g. price, stock) via the same shared form
Delete a package
Styled with an iOS-inspired "frosted glass" look (backdrop blur, translucent panels)
Tech Stack
React 18 + React Router v6 (HashRouter, for GitHub Pages compatibility)
Vite for dev server and builds
json-server as a simulated backend (local development only)
Jest + React Testing Library for testing
Project Structure
robux-store/
├── db.json                  # Simulated backend data (used by json-server)
├── index.html                # Vite HTML entry point
├── package.json
├── vite.config.js
├── babel.config.cjs          # Babel config for Jest
├── jest.config.cjs
└── src/
    ├── App.jsx                # Route definitions
    ├── main.jsx                # React entry point
    ├── index.css                # Glass-style theme
    ├── api/
    │   ├── products.js         # Auto-switches between live/mock data
    │   ├── products.live.js    # Real fetch calls to json-server
    │   └── products.mock.js    # In-memory mock data (used in production builds)
    ├── hooks/
    │   ├── useProducts.js       # Fetches all products
    │   └── useSearch.js         # Filters products by search query
    ├── components/
    │   ├── NavBar.jsx
    │   ├── Footer.jsx
    │   ├── ProductCard.jsx
    │   ├── ProductForm.jsx      # Shared form for add + edit
    │   ├── SearchBar.jsx
    │   ├── Loading.jsx
    │   └── ErrorMessage.jsx
    ├── pages/
    │   ├── LandingPage.jsx
    │   ├── ProductListPage.jsx
    │   ├── ProductPage.jsx      # Detail view + edit + delete
    │   └── AddProductPage.jsx
    └── __tests__/
        ├── ProductCard.test.jsx
        ├── ProductForm.test.jsx
        └── useSearch.test.js
Getting Started
1. Install dependencies
npm install
2. Start the backend (simulated API)
npm run server
This runs json-server on http://localhost:3001, serving data from db.json.

3. Start the frontend (in a separate terminal)
npm run dev
This starts the Vite dev server, usually at http://localhost:5173.

Both the backend and frontend need to be running at the same time during local development.

4. Run tests
npm test
Deploying to GitHub Pages
This project is set up to auto-switch to in-memory mock data in production builds, since GitHub Pages can't run a live json-server backend.

Make sure your GitHub repo name matches the base path in vite.config.js (currently /robux-store/).
Deploy: npm run deploy
This builds the app and pushes the dist/ folder to a gh-pages branch.

In your repo's Settings → Pages, set the source to the gh-pages branch, root folder.
Your app will be live at https://YOUR_USERNAME.github.io/robux-store/.

Note: on the deployed version, add/edit/delete actions only affect in-memory mock data and will reset on page refresh, since there's no persistent backend.

API Reference (src/api/products.js)
Function	Method	Description
getProducts()	GET	Fetch all packages
getProduct(id)	GET	Fetch a single package by id
addProduct(data)	POST	Create a new package
updateProduct(id, updates)	PATCH	Update an existing package
deleteProduct(id)	DELETE	Remove a package
Team / Task Breakdown
Role	Responsibilities
Routing & App Shell	App.jsx, NavBar.jsx, folder structure
Backend & CRUD	db.json, api/products.js
Form & Create/Update	ProductForm.jsx, AddProductPage.jsx, edit flow in ProductPage.jsx
Display & Search	ProductListPage.jsx, ProductCard.jsx, SearchBar.jsx, useSearch.js
Testing & Documentation	__tests__/, this README, Git workflow
License
Class project — not for commercial use.