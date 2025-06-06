# PravaCijena Frontend Documentation

## Description

Frontend for browsing, comparing, and searching grocery products and their prices from various stores.

The app is built with Next.js and uses slug-based routing for human-readable URLs. It communicates with
the [PravaCijena API](https://github.com/Ivo-Kovacevic/prava-cijena-api) to fetch and display data.

## Starting locally

### Prerequisites

Ensure you have the following installed:

- Node.js
- npm or pnpm
- Git
- [PravaCijena API](https://github.com/Ivo-Kovacevic/prava-cijena-api) running locally

### How to start

1. Clone repository:

   ```
   git clone git@github.com:Ivo-Kovacevic/prava-cijena-frontend.git
   ```

2. Navigate into directory:

   ```
   cd prava-cijena-frontend
   ```

3. Install dependencies with npm:

   ```
   npm install
   # or
   pnpm install
   ```

4. Start the development server:

   ```
   npm run dev
   # or
   pnpm dev
   ```

   or build the app like in production

   ```
   npm run build
   ```

   ```
   npm run preview
   ```

5. Open the page in browser

## Application Routes

The following is an overview of the application's routes, their sizes, and rendering strategies, as reported by the
`next build` command (after running `npm run build`). This provides insights into the structure and performance
characteristics of different parts of the application.

```text
Route (app)                                     Size  First Load JS
┌ ○ /                                        2.33 kB         135 kB
├ ○ /_not-found                                167 B         101 kB
├ ○ /clanci/napravi-svoj-dorucak               191 B         113 kB
├ ○ /clanci/tjedan-azijske-kuhinje             191 B         113 kB
├ ○ /kategorije                                172 B         105 kB
├ ● /kategorije/[categorySlug]               1.11 kB         134 kB
├   ├ /kategorije/njega-i-higijena
├   ├ /kategorije/mlijecni-proizvodi-i-jaja
├   ├ /kategorije/priprema-jela
├   └ [+11 more paths]
├ ○ /kontakt                                   167 B         101 kB
├ ƒ /kosarica                                3.28 kB         113 kB
├ ○ /o-nama                                    167 B         101 kB
├ ○ /politika-privatnosti                      167 B         101 kB
├ ƒ /pretraga                                  176 B         113 kB
├ ○ /prijava                                 1.86 kB         106 kB
├ ƒ /profil                                   1.9 kB         115 kB
├ ƒ /proizvod/[productSlug]                  1.51 kB         131 kB
├ ƒ /proizvod/[productSlug]/[storeSlug]        167 B         101 kB
└ ○ /registracija                            1.97 kB         106 kB
+ First Load JS shared by all                 101 kB
  ├ chunks/261-2cc24286899b721e.js           45.8 kB
  ├ chunks/a82cbd8b-2ba20f432d94428c.js      53.2 kB
  └ other shared chunks (total)              1.92 kB

ƒ Middleware                                 33.2 kB

○  (Static)   prerendered as static content
●  (SSG)      prerendered as static HTML (uses generateStaticParams)
ƒ  (Dynamic)  server-rendered on demand