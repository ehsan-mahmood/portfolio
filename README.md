# Portfolio Website

A modern, professional portfolio website built with Next.js 14, React, TypeScript, and Tailwind CSS.

## Features

- **Modern Stack**: Next.js 14 with App Router, React 18, TypeScript
- **Styling**: Tailwind CSS for responsive, modern design
- **Components**: Custom portfolio components with interactive diagrams
- **Performance**: Optimized images and fast page loads
- **Responsive**: Fully responsive design for all devices

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio-nextjs
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
portfolio-nextjs/
├── app/                # Next.js app directory
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/         # React components
│   └── Portfolio.tsx   # Main portfolio component
├── public/             # Static assets
│   └── pro-pic.jpg     # Profile picture
├── docs/               # Documentation
│   ├── content.txt     # Content source
│   ├── capabilities-tools.md
│   └── section-redesign-spec.md
└── package.json        # Dependencies and scripts
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Customization

Update your information in `components/Portfolio.tsx`:
- Name and profession (lines 147-148)
- Contact links (bottom of file)
- Profile picture: replace `public/pro-pic.jpg`

Content source files are available in the `docs/` folder for reference.

## Deployment

This project can be deployed on Vercel, Netlify, or any platform that supports Next.js.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## License

MIT

