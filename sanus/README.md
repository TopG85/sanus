# Sanus

Website design and development for churches, charities and organisations, built by Daniel Carson in Wilmslow, Cheshire.

Live site: https://www.carsonwebstudio.co.uk

## About

Sanus is an anagram of Susan, the name of the founder's mum. It is also a Latin adjective meaning healthy, sane, sound or sensible.

This repository holds the React version of the site, which replaces the earlier plain HTML version. It includes the homepage, project pages, and the client review form.

## Tech stack

- **React** with **Vite** for the build and development server
- **React Router** for pages and addresses
- **React Bits** components:
  - Gooey Nav (navigation menu)
  - Prism (animated hero background)
- **lucide-react** for menu icons
- **Firebase Firestore** for storing client reviews (reviews wait for approval before they appear)
- **ESLint** for code checks
- Fonts: Poppins (headings), Inter (body text), Audiowide (site name)

## Features

- Navbar with a sliding pill menu
- Homepage hero with an animated Prism background
- "How I help" section with three service cards
- Projects page with filters: All, Client, Personal and Hackathons
- Individual project pages, generated from one shared list of projects
- Client review form that saves submissions to Firebase for approval

## Project structure

```
sanus-react/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar/        Navbar.jsx, GooeyNavbar.jsx, Navbar.css, GooeyNavbar.css
│   │   └── Prism/         Prism.jsx, Prism.css
│   ├── data/
│   │   └── projects.js    The list of all projects
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectPage.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── LeaveReview.jsx
│   │   ├── Pricing.jsx
│   │   └── WebsiteCheckup.jsx
│   ├── App.jsx            Page routes and the shared navbar
│   ├── App.css            Site-wide styles
│   ├── index.css          Base styles
│   └── main.jsx           Starts the app and wraps it in the router
├── index.html
├── package.json
└── vite.config.js
```

## Getting started

Requires Node.js (LTS version).

```bash
cd sanus-react
npm install
npm run dev
```

Then open http://localhost:5173/ in your browser.

Other commands:

```bash
npm run build    # Creates a production build in dist/
npm run lint     # Checks the code with ESLint
```

## Adding a project

All projects are stored in `src/data/projects.js`. To add one, copy an existing entry, change its details, and give it a unique `slug`. The slug becomes the page address, for example `/projects/my-new-project`.

Each project has a `type`:

- `"client"` for client work (shown under Client)
- `"personal"` for personal projects (shown under Personal)
- `"hackathon"` for hackathon projects (shown under Hackathons)

The Projects page and the individual project pages update automatically.

## Build status

Completed:

- [x] Navbar and page routing
- [x] Homepage hero and "How I help" section
- [x] Projects page with filters
- [x] Individual project pages

To do:

- [ ] Featured project (Vinelife Church) on the homepage
- [ ] Recent Work section on the homepage
- [ ] Client reviews section on the homepage
- [ ] Footer
- [ ] About page
- [ ] Pricing page
- [ ] Website Check-up page
- [ ] Contact page
- [ ] Leave a Review page, with the Firebase form
- [ ] Mobile menu and responsive checks
- [ ] Final Lighthouse performance checks

## Other notes

- The earlier plain HTML version of the site is kept in the `main` branch for reference.
- Client review submissions are stored in Firebase with `approved: false` until they are checked.

## Credits

- Components from [React Bits](https://reactbits.dev)
- Icons from [lucide](https://lucide.dev)
- Fonts from [Google Fonts](https://fonts.google.com)

## Contact

Daniel Carson
danielcarson1985@gmail.com
