# RaEASY Solutions Website

A responsive, single-page company website for RaEASY Solutions. The website presents the company as a custom software development and Zoho ecosystem implementation partner for growing organisations.

The experience is designed to communicate RaEASY's services clearly, establish credibility, and convert visitors through direct contact, WhatsApp, and a demo-request form.

## Features

- Responsive layout built with CSS Grid and Flexbox
- Desktop, tablet, mobile, and narrow-screen breakpoints
- Animated hero presentation with a slowly rotating connected globe
- Sticky glass-effect navigation
- Animated business statistics
- Custom software and Zoho service presentation
- Interactive five-stage delivery process
- Detailed Zoho product and service selector
- Client enquiry and demo-booking form
- Direct telephone and email links
- Floating WhatsApp contact button
- Scroll-reveal and hover interactions
- Reduced-motion accessibility support
- Semantic HTML and accessible form labels
- SEO title and page description

## Core services presented

### Custom software development

- Custom web applications
- Mobile applications
- Customer and employee portals
- Business management platforms
- Dashboards and internal systems

### Zoho ecosystem solutions

- Zoho One implementation
- Zoho CRM setup and customisation
- Zoho Books and finance setup
- Zoho Desk customer support setup
- Zoho People HR setup
- Zoho Creator custom applications
- Zoho Analytics and reporting
- Zoho optimisation and ongoing support

### Integration and automation

- API and third-party integrations
- Zoho Flow automation
- Deluge workflow automation
- Data migration and cleansing
- Business reporting and analytics

## Homepage structure

1. Hero and primary call to action
2. Animated company statistics
3. RaEASY value proposition
4. Services
5. Delivery process
6. Reasons to choose RaEASY
7. Company values
8. Contact details and demo-request form
9. Floating WhatsApp action

## Technology

- HTML5
- CSS3
- Vanilla JavaScript
- Vite 7
- Google Fonts for the primary interface typography
- Times New Roman for the contact section's Roman serif styling

No frontend framework or runtime API is required.

## Local development

### Requirements

- Node.js 20.19+ or 22.12+
- npm

### Installation

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Open [http://localhost:4173](http://localhost:4173) in a browser. If the port is already occupied, Vite will select the next available port.

## Production build

Create an optimised production bundle:

```bash
npm run build
```

The generated files are written to `dist/`.

Run the project validation command:

```bash
npm run check
```

At present, `check` performs a complete Vite production build.

## Project files

```text
.
├── index.html        # Page content and semantic structure
├── styles.css        # Visual system, layouts, animation, and breakpoints
├── script.js         # Navigation, counters, reveals, accordion, and form behavior
├── package.json      # npm scripts and Vite dependency
├── package-lock.json # Reproducible dependency versions
└── README.md         # Project documentation
```

## Contact configuration

The website currently uses the following contact details:

- Telephone: `+254 700 000 000`
- Email: `talktous@raeasy.com`
- WhatsApp: `+254 743 573 380`
- Location: Waiyaki Way, Nairobi

These values are defined directly in `index.html`. When contact information changes, update the visible text and the corresponding `tel:`, `mailto:`, or `wa.me` link.

WhatsApp links require the international telephone format without a leading `+`, spaces, or punctuation. The current link therefore uses `254743573380`.

## Demo-request form

The contact section includes fields for:

- Name
- Work email
- Company
- Telephone number
- Required service
- Project or operational challenge

The form currently uses a `mailto:` workflow. On submission, JavaScript formats the enquiry and opens the visitor's configured email application with a message addressed to `talktous@raeasy.com`.

This approach does not store form submissions. For direct browser submission, lead storage, automatic acknowledgements, or CRM tracking, connect the form to a backend endpoint or Zoho Forms/Zoho CRM before production launch.

## Responsive design

The layout uses fluid sizing, Grid, Flexbox, `minmax()`, and `clamp()` rather than fixed page widths. Breakpoints cover:

- Large screens: 1400px and above
- Laptops: up to 1100px
- Tablets: up to 850px
- Mobile phones: up to 560px
- Narrow devices: up to 360px

All major layout children use overflow protection to prevent horizontal scrolling on small screens.

## Animation and accessibility

- Statistics count upward when they become visible.
- Hero statistics animate when the homepage loads.
- The globe completes one rotation every 45 seconds.
- Content reveals as visitors move through the page.
- Interactive elements include keyboard focus behavior and descriptive labels.
- Visitors using `prefers-reduced-motion` receive a static experience.

## Deployment

The generated `dist/` directory can be deployed to any static hosting provider, including:

- Netlify
- Vercel
- Cloudflare Pages
- GitHub Pages
- An Apache or Nginx web server

Build the project before deployment:

```bash
npm run build
```

Publish the contents of `dist/` as the website root.

## Recommended production follow-ups

- Connect the demo form to Zoho Forms or Zoho CRM
- Replace placeholder contact details if required
- Add the final company domain and social profiles
- Add privacy and cookie policies if analytics or tracking is introduced
- Add Open Graph artwork and a favicon
- Configure analytics and conversion tracking
- Test the deployed form, telephone, email, and WhatsApp links

## Brand direction

The interface follows RaEASY's established visual direction:

- Deep forest-green foundations
- Bright green accents
- Warm neutral surfaces
- Clear, confident typography
- Simple messaging focused on practical business outcomes

RaEASY combines “Rahisi,” the Swahili word for “easy,” with a commitment to making business technology accessible, understandable, and useful.
