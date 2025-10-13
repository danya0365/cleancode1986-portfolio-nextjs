'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
}

export function Lightbox({ images, currentIndex: initialIndex, onClose }: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case 'Escape':
          handleClose();
          break;
        case 'ArrowLeft':
          goToPrevious();
          break;
        case 'ArrowRight':
          goToNext();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Add a small delay for the animation
      const timer = setTimeout(() => {
        setIsAnimating(true);
      }, 10);
      return () => clearTimeout(timer);
    } else {
      document.body.style.overflow = 'auto';
      setIsAnimating(false);
    }
  }, [isOpen]);

  // Open the lightbox with the selected image
  useEffect(() => {
    if (initialIndex >= 0 && initialIndex < images.length) {
      setCurrentIndex(initialIndex);
      setIsOpen(true);
    }
  }, [initialIndex, images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleClose = () => {
    setIsOpen(false);
    // Wait for the animation to complete before calling onClose
    setTimeout(() => {
      onClose();
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black/90 transition-opacity duration-300 ${isAnimating ? 'opacity-100' : 'opacity-0'}`}>
      {/* Close button */}
      <button
        onClick={handleClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
        aria-label="Close lightbox"
      >
        <X size={32} />
      </button>

      {/* Navigation arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 md:left-8 text-white hover:text-gray-300 transition-colors z-10 p-2"
            aria-label="Previous image"
          >
            <ChevronLeft size={40} />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 md:right-8 text-white hover:text-gray-300 transition-colors z-10 p-2"
            aria-label="Next image"
          >
            <ChevronRight size={40} />
          </button>
        </>
      )}

      {/* Current image */}
      <div className="relative w-full h-full flex items-center justify-center p-4">
        <div className="relative w-full max-w-5xl h-full max-h-[90vh] flex items-center justify-center">
          <Image
            src={images[currentIndex]}
            alt={`Project image ${currentIndex + 1}`}
            fill
            className="object-contain"
            priority
            sizes="(max-width: 768px) 100vw, 90vw"
          />
        </div>
      </div>

      {/* Thumbnail navigation */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 overflow-x-auto py-2 px-4">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-16 h-16 md:w-20 md:h-20 flex-shrink-0 rounded overflow-hidden border-2 transition-all ${currentIndex === index ? 'border-blue-500 scale-110' : 'border-transparent hover:border-white/50'}`}
              aria-label={`View image ${index + 1}`}
            >
              <Image
                src={img}
                alt={`Thumbnail ${index + 1}`}
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Image counter */}
      {images.length > 1 && (
        <div className="absolute top-4 left-4 md:left-8 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
          {currentIndex + 1} / {images.length}
        </div>
      )}
    </div>
  );
}

export function useLightbox() {
  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    currentIndex: number;
  }>({
    isOpen: false,
    currentIndex: 0,
  });

  const openLightbox = (index: number = 0) => {
    setLightboxState({
      isOpen: true,
      currentIndex: index,
    });
  };

  const closeLightbox = () => {
    setLightboxState(prev => ({
      ...prev,
      isOpen: false,
    }));
  };

  return {
    isOpen: lightboxState.isOpen,
    currentIndex: lightboxState.currentIndex,
    openLightbox,
    closeLightbox,
  };
}
