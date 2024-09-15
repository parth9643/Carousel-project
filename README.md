
# Smart Book Carousel with Dark Mode and API Integration

This project is a dynamic web application built with **Next.js**, offering a smart book carousel that fetches data from an API, categorizes books, and allows users to scroll through chapters. The application also includes features like **dark mode**, **bookmarking**, **responsive design**, and smooth user interaction with mouse scrolling. The project is designed for both mobile and desktop views, ensuring accessibility and performance.

## Features

- **Responsive Carousel**: A card-based carousel to scroll through book chapters with intuitive navigation and mouse scroll support.
- **Dark Mode**: Toggle between light and dark mode, with smooth transitions and saved user preferences.
- **API Integration**: Dynamically fetch and display book data from an API, including images, audio files, and descriptions.
- **Optimized for Performance**: Lazy loading of images and optimized asset management.
- **Accessibility**: Supports keyboard navigation and accessible design principles.

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [File Structure](#file-structure)
4. [Technologies Used](#technologies-used)
5. [Contributing](#contributing)
6. [License](#license)

---

## Installation

To get the project up and running on your local machine, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/book-carousel.git
    ```
2. Navigate into the project directory:
    ```bash
    cd book-carousel
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```
4. Start the development server:
    ```bash
    npm run dev
    ```

---

## Usage

### Running the Application
Once the server is running, open the application in your browser at:
```
http://localhost:3000
```

### Dark Mode Toggle
- The dark mode toggle button is available at the top-right corner.
- Click the circular button to switch between light and dark modes. The icon changes according to the mode.

### Book Carousel
- Navigate through different books using the carousel. Each book displays its chapters in card format.
- Use the mouse scroll or arrows to scroll through the chapters.

---

## File Structure

```bash
├── components/
│   ├── Carousel.js         # Carousel component
│   ├── XPContext.js        # Context for global state (XP system)
│   ├── ChapterContexts.js  # Context for chapter data management
│
├── pages/
│   └── index.js            # Main home page for the project
│
├── public/                 # Public assets like images and icons
    └── lock-icon-white.svg
│
├── style/
│   ├── carousel.css        # Styles for carousel component
│── global.css              # Global styles, including light and dark mode
│
├── .gitignore              # Files to ignore in version control
├── README.md               # Project documentation
└── package.json            # Project dependencies and scripts
```

---

## Technologies Used

- **Next.js**: Framework for server-rendered React applications.
- **React**: Frontend library for building user interfaces.
- **CSS Modules**: Scoped styling for individual components.
- **Context API**: State management using React's Context API.
- **Embla Carousel**: Lightweight carousel library for smooth scrolling.
- **Font Awesome**: Icon library for dark mode and bookmarking icons.

---

## Contributing

If you would like to contribute to this project, feel free to submit a pull request with detailed information on the changes. Ensure that your code follows the established conventions and includes relevant tests.

Steps to contribute:
1. Fork the repository.
2. Create a new branch:
    ```bash
    git checkout -b feature-branch-name
    ```
3. Make your changes and commit them:
    ```bash
    git commit -m 'Add new feature'
    ```
4. Push to the branch:
    ```bash
    git push origin feature-branch-name
    ```
5. Open a pull request in the original repository.

---

## License

This project is licensed under the MIT License. You are free to use, modify, and distribute this software as long as proper credit is given.

---

## Contact

If you have any questions or issues, feel free to contact me at:
- **GitHub**: [parth9643](https://github.com/parth9643)
- **Email**: parthshukla9717830829@gmail.com


