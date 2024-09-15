import React, { useContext, useEffect, useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import XPContext from './XPContext';
import ChaptersContext from './ChapterContexts';
import styles from '../style/carousel.module.css';
import Image from 'next/image';

const Carousel = () => {
  const { xp } = useContext(XPContext);
  const { books, loading } = useContext(ChaptersContext);
  const [selectedBookIndex, setSelectedBookIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [shakeIndex, setShakeIndex] = useState(null);
  const [hoverDirection, setHoverDirection] = useState({});

  const isLocked = (unlockXp) => xp < unlockXp;
  const isComingSoon = (unlockXp) => unlockXp === "coming soon";

  const getChapterStatus = (unlockXp) => {
    if (isComingSoon(unlockXp)) return "comingSoon";
    return isLocked(unlockXp) ? "locked" : "unlocked";
  };

  const scrollToChapter = useCallback((startChapterIndex) => {
    if (emblaApi) {
      emblaApi.scrollTo(startChapterIndex);
    }
  }, [emblaApi]);

  useEffect(() => {
    scrollToChapter(0);
  }, [selectedBookIndex, scrollToChapter]);

  useEffect(() => {
    const handleWheel = (event) => {
      if (!emblaApi) return;

      const scrollSpeed = 0.5;
      const scrollAmount = Math.sign(event.deltaY) * scrollSpeed;

      const currentIndex = emblaApi.selectedScrollSnap();
      const snapList = emblaApi.scrollSnapList();
      const newIndex = Math.max(0, Math.min(snapList.length - 1, Math.round(currentIndex + scrollAmount)));

      emblaApi.scrollTo(newIndex);
      event.preventDefault();
    };

    if (emblaApi) {
      window.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [emblaApi]);

  const handleSlideClick = (index, status) => {
    if (status === "locked" || status === "comingSoon") {
      setShakeIndex(index);
      setTimeout(() => setShakeIndex(null), 500);
    }
  };

  const handleMouseMove = (index, e) => {
    const card = e.currentTarget;
    const cardRect = card.getBoundingClientRect();
    const cardWidth = cardRect.width;
    const cardX = e.clientX - cardRect.left;

    setHoverDirection({ [index]: cardX > cardWidth / 2 ? 'right' : 'left' });
  };

  const handleMouseLeave = (index) => {
    setHoverDirection({ [index]: null });
  };

  if (loading) {
    return <p>Loading books...</p>;
  }

  const selectedBook = books[selectedBookIndex];
  const chapters = selectedBook?.chapters || [];

  return (
    <div>
      <div className={styles.bookSelector}>
        {books.map((book, index) => (
          <button
            key={book.id}
            className={`${styles.bookButton} ${index === selectedBookIndex ? styles.activeButton : ''}`}
            onClick={() => setSelectedBookIndex(index)}
          >
            {book.name}
          </button>
        ))}
      </div>

      <div className={styles.carouselWrapper}>
        <div className={styles.embla} ref={emblaRef}>
          <div className={styles.embla__container}>
            {chapters.length > 0 ? (
              chapters.map((chapter, index) => {
                const status = getChapterStatus(chapter.unlockXp);
                return (
                  <div
                    key={chapter.id}
                    className={`${styles.embla__slide} ${shakeIndex === index ? styles.shake : ''} ${status === 'locked' ? styles.locked : ''} ${status === 'comingSoon' ? styles.comingSoon : ''} ${hoverDirection[index] === 'left' ? styles.hoverLeft : hoverDirection[index] === 'right' ? styles.hoverRight : ''}`}
                    onClick={() => handleSlideClick(index, status)}
                    onMouseMove={(e) => handleMouseMove(index, e)}
                    onMouseLeave={() => handleMouseLeave(index)}
                  >
                    <div className={styles.chapterCard}>
                      <Image //image showing
                        src={chapter.imageUrl}
                        alt={chapter.name}
                        width={800}
                        height={450}
                        className={styles.chapterImage}
                        loading={index === 0 ? 'eager' : 'lazy'}
                      />
                      <div className={styles.chapterInfo}>
                        <h3 className={styles.chapterTitle}>
                          {status === 'comingSoon' ? 'Coming Soon' : chapter.name}
                        </h3>
                      </div>
                      {(status === 'locked' || status === 'comingSoon') && (
                        <div className={styles.lockOverlay}>
                          <Image
                            src="/lock-icon-white.svg" //lock icon
                            alt="Locked"
                            width={50}
                            height={50}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })
            ) : (
              <p>No chapters available</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
