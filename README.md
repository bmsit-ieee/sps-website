# IEEE SPS BMSIT Website

Official website for the IEEE Signal Processing Society chapter at BMSIT (BMS Institute of Technology).

## Overview

This is a modern, responsive website built with React and TypeScript, featuring information about IEEE SPS events, team members, archives, and more.

## Features

- **Responsive Design**: Built with Tailwind CSS for seamless experience across devices
- **Dark/Light Theme**: Toggle between dark and light themes
- **Event Management**: Display and manage upcoming events
- **Team Showcase**: Display team members and leadership
- **Holiday Calendar**: Integration with holiday popups
- **Chatbot Support**: Integrated chatbot for user assistance
- **Multi-page Layout**: Dedicated pages for different sections

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Chatbot.tsx
│   ├── EventPopup.tsx
│   ├── Footer.tsx
│   ├── HolidayPopup.tsx
│   ├── Navbar.tsx
│   └── ThemeToggle.tsx
├── pages/              # Page components
│   ├── Home.tsx
│   ├── Events.tsx
│   ├── Team.tsx
│   ├── Spectrum.tsx
│   ├── Vision.tsx
│   ├── WavePlay.tsx
│   └── Archives.tsx
├── hooks/              # Custom React hooks
│   └── useTheme.ts
├── App.tsx             # Main app component
├── Home.tsx            # Home page
├── main.tsx            # Entry point
└── index.css           # Global styles
```

## Technologies Used

- **Frontend Framework**: React 18+
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Package Manager**: npm
- **Linting**: ESLint
- **CSS Processing**: PostCSS

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/bmsit-ieee/sps-website.git
cd sps-website
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

Build for production:
```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Linting

Check code quality:
```bash
npm run lint
```

## Deployment

This project is configured for deployment on:
- **Netlify** (via `netlify.toml`)
- **Vercel** (via `vercel.json`)

### Netlify

```bash
npm run build
```

The site will automatically deploy when pushed to the main branch.

### Vercel

Configuration is handled in `vercel.json`. Deploy by pushing to your Vercel-connected repository.

## Configuration Files

- `tsconfig.json` - TypeScript configuration
- `vite.config.ts` - Vite build configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS configuration
- `eslint.config.js` - ESLint configuration

## Pages

- **Home** - Landing page with overview
- **Events** - Upcoming and past events
- **Team** - Team members and leadership
- **Spectrum** - IEEE Spectrum information
- **Vision** - Organization vision and mission
- **WavePlay** - Special event or project page
- **Archives** - Historical content and archives

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is part of IEEE SPS BMSIT. For licensing information, please contact the maintainers.

## Contact

For questions or support, please reach out to the IEEE SPS BMSIT chapter.

## Acknowledgments

- IEEE Signal Processing Society
- BMSIT (BMS Institute of Technology)
- All contributors and team members
