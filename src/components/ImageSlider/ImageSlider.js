import React, { useState } from 'react';
import './ImageSlider.css';

const ImageSlider = ({ slides, imageScale = 100 }) => {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent(prev => (prev <= 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent(prev => (prev >= slides.length - 1 ? 0 : prev + 1));
  };

  const imageSizeStyle = {
    width: `${imageScale}%`,
    height: 'auto'
  };

  const sliderSizeStyle = {
    maxWidth: `${imageScale}%`
  };

  return (
    <div className="slider" style={sliderSizeStyle}>
      <div className="slider-content">
        <button 
          className="slider-btn slider-btn-prev" 
          onClick={handlePrev} 
          style={{ visibility: slides.length > 1 ? 'visible' : 'hidden' }}
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
          style={{ visibility: slides.length > 1 ? 'visible' : 'hidden' }}
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
