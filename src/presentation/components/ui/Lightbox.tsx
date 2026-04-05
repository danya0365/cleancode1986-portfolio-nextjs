'use client';

import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from "@/src/presentation/utils/cn";

interface LightboxProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
}

export function Lightbox({ images, currentIndex: initialIndex, onClose }: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Open the lightbox with the selected image
  useEffect(() => {
    if (initialIndex >= 0 && initialIndex < images.length) {
      setCurrentIndex(initialIndex);
      setIsOpen(true);
    }
  }, [initialIndex, images.length]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    setTimeout(onClose, 300);
  }, [onClose]);

  const goToPrevious = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);

  const goToNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);

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
  }, [isOpen, handleClose, goToPrevious, goToNext]);

  if (!mounted) return null;

  const lightboxContent = (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-8"
          onClick={handleClose}
        >
          {/* Header Controls */}
          <div className="absolute top-0 left-0 right-0 p-4 md:p-8 flex items-center justify-between z-50 pointer-events-none">
            <motion.div 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="bg-white/10 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-sm font-bold border border-white/10"
            >
              {currentIndex + 1} / {images.length}
            </motion.div>
            
            <motion.button
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              onClick={handleClose}
              className="p-3 bg-white/10 hover:bg-red-500/80 backdrop-blur-md text-white rounded-full transition-all border border-white/10 pointer-events-auto shadow-xl"
              aria-label="Close lightbox"
            >
              <X size={24} />
            </motion.button>
          </div>

          {/* Main Stage */}
          <div className="relative w-full max-w-7xl h-full flex items-center justify-center gap-4">
            {/* Navigation arrows (Desktop) */}
            {images.length > 1 && (
              <motion.button
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                onClick={goToPrevious}
                className="hidden md:flex flex-shrink-0 p-4 bg-white/5 hover:bg-white/20 backdrop-blur-sm text-white rounded-2xl transition-all border border-white/10 pointer-events-auto"
                aria-label="Previous image"
              >
                <ChevronLeft size={32} />
              </motion.button>
            )}

            {/* Current image container */}
            <div 
              className="relative flex-1 h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 0.9, x: 20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.95, x: -20 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="relative w-full h-full max-h-[70vh] md:max-h-[80vh]"
                >
                  <Image
                    src={images[currentIndex]}
                    alt={`Project image ${currentIndex + 1}`}
                    fill
                    className="object-contain drop-shadow-2xl"
                    priority
                    sizes="100vw"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {images.length > 1 && (
              <motion.button
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                onClick={goToNext}
                className="hidden md:flex flex-shrink-0 p-4 bg-white/5 hover:bg-white/20 backdrop-blur-sm text-white rounded-2xl transition-all border border-white/10 pointer-events-auto"
                aria-label="Next image"
              >
                <ChevronRight size={32} />
              </motion.button>
            )}
          </div>

          {/* mobile Navigation */}
          <div className="flex md:hidden items-center gap-8 mt-4 pointer-events-auto">
             <button onClick={goToPrevious} className="p-4 bg-white/10 rounded-full text-white"><ChevronLeft size={24} /></button>
             <button onClick={goToNext} className="p-4 bg-white/10 rounded-full text-white"><ChevronRight size={24} /></button>
          </div>

          {/* Thumbnail navigation */}
          {images.length > 1 && (
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="mt-8 flex justify-center gap-3 overflow-x-auto py-4 px-4 max-w-full no-scrollbar pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    "relative w-16 h-16 md:w-20 md:h-20 flex-shrink-0 rounded-xl overflow-hidden border-2 transition-all duration-300",
                    currentIndex === index 
                      ? 'border-indigo-500 scale-110 shadow-lg shadow-indigo-500/50' 
                      : 'border-white/10 hover:border-white/50 opacity-40 hover:opacity-100'
                  )}
                >
                  <Image src={img} alt={`Thumbnail ${index + 1}`} fill className="object-cover" />
                </button>
              ))}
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );

  return createPortal(lightboxContent, document.body);
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
