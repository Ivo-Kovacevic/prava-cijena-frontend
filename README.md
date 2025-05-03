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