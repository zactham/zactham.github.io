import React, { useState, useEffect } from 'react';
import './ImageSlider.css';

const ImageSlider = ({ slides, imageScale = 100 }) => {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // detect mobile on initial load

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize); // listen for window resize

    return () => {
      window.removeEventListener('resize', handleResize); // clean up listener on component unmount
    };
  }, []);

  const handlePrev = () => {
    setCurrent(prev => (prev <= 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent(prev => (prev >= slides.length - 1 ? 0 : prev + 1));
  };

  const effectiveImageScale = isMobile ? 93 : imageScale; // set scale to 100% on mobile

  const imageSizeStyle = {
    width: `${effectiveImageScale}%`,
    height: 'auto'
  };

  const sliderSizeStyle = {
    maxWidth: `${effectiveImageScale}%`
  };

  return (
    <div className="slider" style={sliderSizeStyle}>
      <div className="slider-content">
        <button 
          className="slider-btn slider-btn-prev" 
          onClick={handlePrev} 
          style={{ visibility: slides.length > 1 && !isMobile ? 'visible' : 'hidden' }}
        >
          &lt;
        </button>
        <img 
          src={slides[current].url} 
          alt={`Slide ${current}: ${slides[current].title}`} 
          className="slider-img" 
          style={imageSizeStyle}
        />
        <button 
          className="slider-btn slider-btn-next" 
          onClick={handleNext} 
          style={{ visibility: slides.length > 1 && !isMobile ? 'visible' : 'hidden' }}
        >
          &gt;
        </button>
      </div>
      <div className="slider-pagination">
        {slides.map((_, index) => (
          <span 
            key={index}
            className={`slider-dot ${index === current ? 'active' : ''}`}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
