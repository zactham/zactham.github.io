import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const ImageSlider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);
    const [imageErrors, setImageErrors] = useState({});

    const sliderStyles = {
        height: '100%',
        position: 'relative',
        borderRadius: '16px',
        overflow: 'hidden',
        background: '#f8f9fa',
    };

    const slideStyles = {
        width: '100%',
        height: '100%',
        borderRadius: '16px',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: imageErrors[currentIndex] ? 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' : `url(${slides[currentIndex].url})`,
        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#666',
        fontSize: '16px',
        fontWeight: '500',
    };

    const leftArrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: "translate(0, -50%)",
        left: '16px',
        width: '44px',
        height: '44px',
        background: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(10px)',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '18px',
        color: '#333',
        zIndex: '10',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    };

    const rightArrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: "translate(0, -50%)",
        right: '16px',
        width: '44px',
        height: '44px',
        background: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(10px)',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '18px',
        color: '#333',
        zIndex: '10',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    };

    const dotsContainerStyles = {
        display: 'flex',
        justifyContent: 'center',
        position: 'absolute',
        bottom: '16px',
        left: '50%',
        transform: 'translateX(-50%)',
        gap: '8px',
        padding: '8px 16px',
        background: 'rgba(0, 0, 0, 0.3)',
        backdropFilter: 'blur(10px)',
        borderRadius: '20px',
        zIndex: '10',
    };

    const dotStyles = {
        width: '8px',
        height: '8px',
        borderRadius: '50%',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        background: 'rgba(255, 255, 255, 0.5)',
    };

    const activeDotStyles = {
        ...dotStyles,
        background: '#ffffff',
        transform: 'scale(1.2)',
    };

    const arrowHoverStyle = {
        transform: 'translate(0, -50%) scale(1.1)',
        background: 'rgba(255, 255, 255, 1)',
        boxShadow: '0 6px 20px rgba(0, 0, 0, 0.25)',
    };

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    const handleImageError = (index) => {
        setImageErrors(prev => ({
            ...prev,
            [index]: true
        }));
        console.error(`Failed to load image at index ${index}:`, slides[index]?.url);
    };

    const openLightbox = (index = currentIndex) => {
        console.log('Opening lightbox for index:', index);
        setLightboxIndex(index);
        setIsLightboxOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        console.log('Closing lightbox');
        setIsLightboxOpen(false);
        document.body.style.overflow = 'unset';
    };

    const goToPreviousLightbox = () => {
        const isFirstSlide = lightboxIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : lightboxIndex - 1;
        setLightboxIndex(newIndex);
    };

    const goToNextLightbox = () => {
        const isLastSlide = lightboxIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : lightboxIndex + 1;
        setLightboxIndex(newIndex);
    };

    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (isLightboxOpen) {
                if (e.key === 'Escape') {
                    closeLightbox();
                } else if (e.key === 'ArrowLeft') {
                    goToPreviousLightbox();
                } else if (e.key === 'ArrowRight') {
                    goToNextLightbox();
                }
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isLightboxOpen, lightboxIndex]);

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    // Lightbox component
    const LightboxModal = () => (
        <div 
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                width: '100vw',
                height: '100vh',
                background: 'rgba(0, 0, 0, 0.95)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 999999,
                backdropFilter: 'blur(10px)',
            }}
            onClick={(e) => {
                if (e.target === e.currentTarget) {
                    closeLightbox();
                }
            }}
        >
            {/* Close button */}
            <div 
                style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    width: '50px',
                    height: '50px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    border: '2px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '24px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    zIndex: 1000001,
                }}
                onClick={closeLightbox}
                onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(255, 255, 255, 0.2)';
                    e.target.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                    e.target.style.transform = 'scale(1)';
                }}
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
            </div>

            {/* Navigation arrows */}
            {slides.length > 1 && (
                <>
                    <div 
                        style={{
                            position: 'absolute',
                            left: '20px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            width: '60px',
                            height: '60px',
                            background: 'rgba(255, 255, 255, 0.1)',
                            backdropFilter: 'blur(10px)',
                            border: '2px solid rgba(255, 255, 255, 0.2)',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontSize: '24px',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            zIndex: 1000001,
                        }}
                        onClick={goToPreviousLightbox}
                        onMouseEnter={(e) => {
                            e.target.style.background = 'rgba(255, 255, 255, 0.2)';
                            e.target.style.transform = 'translateY(-50%) scale(1.1)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                            e.target.style.transform = 'translateY(-50%) scale(1)';
                        }}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M15 18l-6-6 6-6"/>
                        </svg>
                    </div>
                    <div 
                        style={{
                            position: 'absolute',
                            right: '20px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            width: '60px',
                            height: '60px',
                            background: 'rgba(255, 255, 255, 0.1)',
                            backdropFilter: 'blur(10px)',
                            border: '2px solid rgba(255, 255, 255, 0.2)',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontSize: '24px',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            zIndex: 1000001,
                        }}
                        onClick={goToNextLightbox}
                        onMouseEnter={(e) => {
                            e.target.style.background = 'rgba(255, 255, 255, 0.2)';
                            e.target.style.transform = 'translateY(-50%) scale(1.1)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                            e.target.style.transform = 'translateY(-50%) scale(1)';
                        }}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M9 18l6-6-6-6"/>
                        </svg>
                    </div>
                </>
            )}

            {/* Image */}
            {imageErrors[lightboxIndex] ? (
                <div style={{
                    color: 'white',
                    fontSize: '24px',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <div style={{ fontSize: '48px', marginBottom: '16px' }}>📷</div>
                    <div>Image not available</div>
                    <div style={{ fontSize: '14px', marginTop: '8px', opacity: 0.7 }}>
                        {slides[lightboxIndex]?.title || 'Project image'}
                    </div>
                </div>
            ) : (
                <img 
                    src={slides[lightboxIndex]?.url} 
                    alt={slides[lightboxIndex]?.title || 'Project image'}
                    style={{
                        maxWidth: '90vw',
                        maxHeight: '85vh',
                        width: 'auto',
                        height: 'auto',
                        objectFit: 'contain',
                        borderRadius: '8px',
                        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
                        transition: 'all 0.3s ease',
                    }}
                    draggable={false}
                    onError={() => handleImageError(lightboxIndex)}
                />
            )}

            {/* Counter */}
            {slides.length > 1 && (
                <div style={{
                    position: 'absolute',
                    bottom: '20px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'rgba(0, 0, 0, 0.7)',
                    color: 'white',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    fontSize: '14px',
                    fontWeight: '600',
                    zIndex: 1000001,
                    backdropFilter: 'blur(10px)',
                }}>
                    {lightboxIndex + 1} / {slides.length}
                </div>
            )}
        </div>
    );

    return (
        <>
            <div style={sliderStyles} className="modern-slider">
                {slides.length > 1 && (
                    <>
                        <div 
                            style={leftArrowStyles} 
                            onClick={goToPrevious}
                            onMouseEnter={(e) => {
                                Object.assign(e.target.style, arrowHoverStyle);
                            }}
                            onMouseLeave={(e) => {
                                Object.assign(e.target.style, leftArrowStyles);
                            }}
                            className="slider-arrow slider-arrow-left"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M15 18l-6-6 6-6"/>
                            </svg>
                        </div>
                        <div 
                            style={rightArrowStyles} 
                            onClick={goToNext}
                            onMouseEnter={(e) => {
                                Object.assign(e.target.style, arrowHoverStyle);
                            }}
                            onMouseLeave={(e) => {
                                Object.assign(e.target.style, rightArrowStyles);
                            }}
                            className="slider-arrow slider-arrow-right"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M9 18l6-6-6-6"/>
                            </svg>
                        </div>
                    </>
                )}
                
                <div 
                    style={slideStyles}
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        console.log('Image clicked, opening lightbox');
                        openLightbox(currentIndex);
                    }}
                    title="Click to view fullscreen"
                >
                    {imageErrors[currentIndex] ? (
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '24px', marginBottom: '8px' }}>📷</div>
                            <div>Image not available</div>
                        </div>
                    ) : null}
                    {/* Hidden images for preloading */}
                    {slides.map((slide, index) => (
                        <img
                            key={index}
                            src={slide.url}
                            alt={slide.title}
                            style={{ display: 'none' }}
                            onError={() => handleImageError(index)}
                        />
                    ))}
                </div>
                
                {slides.length > 1 && (
                    <div style={dotsContainerStyles}>
                        {slides.map((slide, slideIndex) => (
                            <div 
                                key={slideIndex} 
                                style={slideIndex === currentIndex ? activeDotStyles : dotStyles} 
                                onClick={() => goToSlide(slideIndex)}
                                className="slider-dot"
                            />
                        ))}
                    </div>
                )}
            </div>

            {/* Lightbox Modal - Rendered to document.body using React Portal */}
            {isLightboxOpen && createPortal(<LightboxModal />, document.body)}
        </>
    );
};

export default ImageSlider;