import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import Carousel from '../components/Carousel';
import { XPProvider } from '../components/XPContext';
import { ChaptersProvider } from '../components/ChapterContexts';
import '../global.css'; 

const HomePage = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const handleBookSelect = (chapterIndex) => {
    setSelectedBook(chapterIndex);
  };

  return (
    <XPProvider>
      <ChaptersProvider>
        <div className="global-theme">
          <button onClick={toggleTheme} className="toggleButton">
            <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} className="toggleIcon" />
          </button>
          <Carousel selectedBook={selectedBook} />
        </div>
      </ChaptersProvider>
    </XPProvider>
  );
};

export default HomePage;
