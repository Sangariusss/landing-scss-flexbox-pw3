# Interactive Web Design with Gulp

## Table of Contents

- [Overview](#overview)
- [Technologies](#technologies)
- [Features](#features)
- [File Structure](#file-structure)
- [Setup](#setup)
- [Contributions](#contributions)
- [License](#license)

## Overview

This project is a landing page created using SCSS with a Flexbox layout, following the BEM (Block, Element, Modifier) methodology. It emphasizes modern web development techniques, such as ES6+ JavaScript features, responsive design, and a component-based approach. The project utilizes Gulp for task automation, ensuring a smooth development workflow.

## Technologies

- **SCSS**: A powerful CSS preprocessor for writing modular and maintainable styles.
- **Flexbox**: A CSS layout module that enables flexible and responsive designs.
- **BEM Methodology**: A naming convention for CSS classes that promotes reusability and scalability of components.
- **HTML5**: Utilized for creating a semantic structure for web content.
- **ES6+ JavaScript**: Modern JavaScript features such as arrow functions, promises, and modules for cleaner and more efficient code.
- **Gulp**: A task runner for automating repetitive development tasks such as compiling SCSS, minifying JavaScript, and image optimization.
- **Font Integration**: Incorporates custom fonts, including Chronicle Display and Gilroy.
- **Image Optimization**: Utilizes JPG, WebP, and SVG formats for responsive images.

## Features

- **SCSS Modularity**: Organized SCSS files for effective style management.
- **BEM Naming Convention**: Ensured consistent and clear CSS class naming through BEM.
- **Custom Fonts**: Integrated Chronicle Display and Gilroy fonts for enhanced typography.
- **Image Handling**: Included support for various image formats (JPG, WebP, SVG) optimized for responsiveness.
- **ES6+ JavaScript**: Utilized modern JavaScript features like arrow functions, modules, and async/await for a cleaner, more maintainable codebase.
- **Gulp Automation**: Automated tasks such as SCSS compilation, JavaScript minification, and image optimization for faster development.

## File Structure

```
index.html                  # Main landing page
scss/                       # SCSS source files
├── base/                   # Base styles (variables, mixins)
├── blocks/                 # Individual component styles
├── layout/                 # Layout styles for page structure
├── typography/             # Typography styles
└── utilities/              # Utility classes
index.scss                  # Main SCSS entry point
images/                     # Directory for image assets
├── icons/                  # SVG icons (e.g., arrows, user icons, social media icons)
├── photos/                 # JPG and WebP images for backgrounds and visuals
css/                        # Compiled CSS files
└── index.css               # Compiled CSS for the project
js/                         # JavaScript files for interactivity
├── language-toggle.js      # Language toggle functionality
├── main.js                 # Main script for pagination and language toggle
└── pagination.js           # Pagination logic
gulpfile.js                 # Gulp tasks for automating development tasks
```

## Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/sangariusss/landing-scss-flexbox.git
   cd landing-scss-flexbox
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   ```

3. **Compile SCSS**:
   ```bash
   pnpm run gulp
   ```

4. **Run the project**: If using Gulp with a live server, run the following command to automatically open `index.html` in your browser:

    ```bash
    gulp serve
    ```

    If not using a server, manually open index.html in your browser after Gulp has compiled the assets.

## Contributions

Contributions are welcome! If you would like to improve this project or report any issues, feel free to open a pull request or an issue.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
