# Bhargav Parmar - Portfolio Website

A modern, monochrome portfolio website built with Hugo featuring integrated blog functionality.

## 🚀 Features

- **Monochrome Design**: Clean black, white, and grey color scheme
- **Fully Responsive**: Mobile-first design with breakpoints for all devices
- **Hugo-Powered**: Static site generation for blazing-fast performance
- **Integrated Blog**: Write blog posts in Markdown directly in VS Code
- **Google Analytics**: Tracking with ID `G-34P6V7HKG0`
- **SEO Optimized**: Open Graph and Twitter Card meta tags
- **Icon Effects**: Grayscale icons with brand colors on hover
- **Certifications**: Credly badge integration for all 5 K8s certifications

## 📁 Project Structure

```
revamp/
├── archetypes/          # Content templates
│   └── blog.md         # Blog post archetype
├── content/
│   └── blog/           # Blog posts (Markdown)
├── data/               # YAML data files
│   ├── bio.yaml
│   ├── certifications.yaml
│   ├── experience.yaml
│   ├── projects.yaml
│   ├── skills.yaml
│   └── social.yaml
├── layouts/
│   ├── _default/
│   │   └── baseof.html # Base template
│   ├── blog/
│   │   ├── list.html   # Blog list page
│   │   └── single.html # Single post page
│   ├── partials/
│   │   ├── header.html
│   │   └── footer.html
│   └── index.html      # Homepage
├── static/
│   ├── css/
│   │   └── style.css   # Main stylesheet
│   └── js/
│       └── main.js     # JavaScript (icon hover effects)
├── hugo.toml           # Hugo configuration
└── README.md
```

## 🛠️ Local Development

### Prerequisites

- Hugo Extended (v0.120.0 or later)
- Git

### Setup

1. Navigate to the project directory:
```bash
cd /Users/bhargavparmar/Developer/Website/revamp
```

2. Start the Hugo development server:
```bash
hugo server -D
```

3. Open your browser to `http://localhost:1313/`

The site will automatically reload when you make changes.

## ✍️ Writing Blog Posts

### Create a New Post

```bash
hugo new content/blog/my-new-post.md
```

This creates a new Markdown file with the blog archetype template.

### Edit the Post

1. Open the file in VS Code
2. Update the frontmatter (title, date, tags, summary)
3. Set `draft = false` when ready to publish
4. Write your content in Markdown

### Frontmatter Options

```yaml
+++
title = 'Your Post Title'
date = '2026-02-14T10:00:00+05:30'
draft = false
summary = 'Brief description for SEO and previews'
tags = ['Kubernetes', 'DevOps', 'Security']
readingTime = 5
+++
```

## 🏗️ Building for Production

### Build the Site

```bash
hugo --minify
```

The built site will be in the `public/` directory.

### Deploy to GitHub Pages

1. Push the `public/` directory to your GitHub Pages repository:
```bash
cd public
git init
git add .
git commit -m "Deploy site"
git branch -M main
git remote add origin https://github.com/bhargav0605/bhargav0605.github.io.git
git push -u origin main
```

2. Configure GitHub Pages to serve from the `main` branch

3. Your site will be live at `https://bhargavparmar.dev`

## 📝 Updating Content

### Personal Information

Edit the YAML files in the `data/` directory:

- **bio.yaml**: Name, title, bio paragraphs, years of experience
- **social.yaml**: GitHub, LinkedIn, Twitter, email
- **experience.yaml**: Job history and achievements
- **projects.yaml**: Featured projects
- **skills.yaml**: Technologies and tools
- **certifications.yaml**: Credly badge IDs and URLs

### Styling

- **CSS**: `static/css/style.css`
- **JavaScript**: `static/js/main.js`

## 🎨 Design System

### Colors

- `--bg-dark`: #0c0c0c (Hero, Experience, Certs, Blog, Footer)
- `--bg-light`: #f7f7f5 (About, Tools, Projects, Contact)
- `--surface`: #1a1a1a (Card backgrounds on dark sections)
- `--text-dark`: #ffffff (Text on dark backgrounds)
- `--text-light`: #111111 (Text on light backgrounds)

### Typography

- **Headings & Body**: Sora (Google Fonts)
- **Code & Labels**: JetBrains Mono (Google Fonts)

### Icons

- **Devicon CDN**: Technology icons
- **Grayscale Effect**: Icons are grayscale by default, show brand colors on hover

## 📊 Analytics

Google Analytics is integrated and will track:
- Page views
- User demographics
- Traffic sources
- User behavior

Analytics ID: `G-34P6V7HKG0`

## 🔗 External Resources

- **Fonts**: [Google Fonts](https://fonts.google.com/)
- **Icons**: [Devicon](https://devicon.dev/)
- **Certifications**: [Credly](https://www.credly.com/users/bhargav-parmar.dev)
- **Hugo Documentation**: [gohugo.io](https://gohugo.io/)

## 🚧 Troubleshooting

### Hugo Build Errors

If you encounter build errors:

1. Check Hugo version: `hugo version`
2. Ensure all data files are valid YAML
3. Verify template syntax in layout files

### Blog Posts Not Showing

- Ensure `draft = false` in frontmatter
- Check that files are in `content/blog/` directory
- Rebuild with `hugo` or refresh dev server

## 📄 License

This portfolio website is personal property. Please do not copy the design or content without permission.

---

**Built with ☸ by Bhargav Parmar**
