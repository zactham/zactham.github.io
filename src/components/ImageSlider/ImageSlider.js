import React, { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import './ImageSlider.css';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const ImageSlider = ({ slides, imageScale = 100, projectType }) => {
  const [current, setCurrent] = useState(0);

  const handleStepChange = (step) => {
    setCurrent(step);
  };

  const handleClick = () => {
    const nextIndex = (current + 1) % slides.length;
    setCurrent(nextIndex);
  };

  return (
    <div className="slider">
      <AutoPlaySwipeableViews 
        index={current}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {slides.map((slide, index) => (
          <div key={index} onClick={handleClick} className="slider-img-container">
            <img 
              src={slide.url} 
              alt={`Slide ${index}: ${slide.title}`} 
              className={`slider-img slider-img-${projectType}`} 
              style={{ width: `${imageScale}%`, height: 'auto' }} 
            />
          </div>

        ))}
      </AutoPlaySwipeableViews>
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
