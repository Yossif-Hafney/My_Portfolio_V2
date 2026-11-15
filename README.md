# Professional Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features dark mode support, smooth animations, and a professional design.

## 🚀 Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Dark Mode**: Toggle between light and dark themes
- **Responsive**: Fully responsive design that works on all devices
- **Fast Performance**: Built with Vite for optimal performance
- **TypeScript**: Full type safety and better development experience
- **Accessible**: WCAG compliant with proper ARIA labels and keyboard navigation
- **SEO Optimized**: Meta tags and structured content for better search visibility

## 📋 Sections

1. **Hero Section**: Eye-catching introduction with call-to-action buttons
2. **About Section**: Personal story, skills, and experience timeline
3. **Projects Section**: Showcase of work with filtering capabilities
4. **Contact Section**: Contact form and contact information
5. **Footer**: Additional links and social media

## 🛠️ Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Icon library
- **FontAwesome** - Additional icons

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🎨 Customization

### Personal Information

Update the following files with your personal information:

#### 1. `index.html`
```html
<title>Your Name - Web Developer Portfolio</title>
<meta name="description" content="Your description here" />
<meta name="author" content="Your Name" />
```

#### 2. `src/Components/Landing.tsx`
```typescript
// Update personal information
const socialLinks = [
  { icon: FaGithub, href: "https://github.com/yourusername", label: "GitHub" },
  { icon: FaLinkedin, href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
  // Add your social links
];

// Update name and title
<h1 className="text-5xl lg:text-7xl font-bold text-neutral-900 dark:text-white">
  Your Name
</h1>
<h2 className="text-3xl lg:text-4xl font-semibold text-neutral-700 dark:text-neutral-300">
  Your Title
</h2>
```

#### 3. `src/Components/About.tsx`
```typescript
// Update skills
const skills = [
  { name: "Your Skill", icon: YourIcon, color: "text-blue-500" },
  // Add your skills
];

// Update experience
const experiences = [
  {
    title: "Your Job Title",
    company: "Your Company",
    period: "2020 - Present",
    description: "Your job description",
  },
  // Add your experience
];
```

#### 4. `src/Components/Projects.tsx`
```typescript
// Update projects
const projects = [
  {
    id: 1,
    title: "Your Project",
    category: "web",
    image: yourProjectImage,
    description: "Project description",
    technologies: ["React", "Node.js"],
    github: "https://github.com/yourusername/project",
    live: "https://your-project.com",
  },
  // Add your projects
];
```

#### 5. `src/Components/Contact.tsx`
```typescript
// Update contact information
const contactInfo = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "your.email@example.com",
    href: "mailto:your.email@example.com",
  },
  // Add your contact info
];
```

### Images

Replace the placeholder images in `src/images/` with your own:

- `profile.jpeg` - Your profile picture
- `web-project-1.jpg`, `web-project-2.jpg` - Web project screenshots
- `mobile-project-1.jpg`, `mobile-project-2.jpg` - Mobile project screenshots
- `ui-project-1.jpg`, `ui-project-2.jpg` - UI/UX project screenshots
- `mylogo1.png`, `mylogo2.png` - Your logo

### Colors and Styling

The portfolio uses a blue color scheme. To change colors:

1. **Primary Color**: Update blue classes in components
2. **Custom Colors**: Add custom colors to `tailwind.config.js`
3. **Gradients**: Modify gradient classes in components

### Adding New Sections

To add a new section:

1. Create a new component in `src/Components/`
2. Import and add it to `src/App.tsx`
3. Add navigation link in `src/Components/Header.tsx`

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌙 Dark Mode

Dark mode is automatically detected based on system preferences and can be toggled manually. The theme persists across sessions using localStorage.

## ⚡ Performance

- **Lazy Loading**: Images are optimized for performance
- **Code Splitting**: Components are loaded on demand
- **Minification**: Production builds are minified
- **Caching**: Static assets are cached for better performance

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Project Structure

```
src/
├── Components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Landing.tsx     # Hero section
│   ├── About.tsx       # About section
│   ├── Projects.tsx    # Projects showcase
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer
├── images/             # Static images
├── main.css           # Global styles
├── App.tsx            # Main app component
└── main.tsx           # Entry point
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify

1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify

### GitHub Pages

1. Add `"homepage": "https://yourusername.github.io/portfolio"` to `package.json`
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add deploy script: `"deploy": "gh-pages -d dist"`
4. Build and deploy: `npm run build && npm run deploy`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help customizing your portfolio, please open an issue on GitHub.

---

**Made with ❤️ using React, TypeScript, and Tailwind CSS**
