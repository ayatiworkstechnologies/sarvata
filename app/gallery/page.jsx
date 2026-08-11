"use client";
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';

const EVENTS_DATA = {
  years: ['2026-2027'],
  eventsByYear: {
    '2026-2027': [
      { title: "Sarvata Educators collective 2026", 
        id: 1, 
        size: 'small',
        images: ["/gallery/sec/image2.png",
                  "/gallery/sec/image1.png",
                  "/gallery/sec/image3.png",
                  "/gallery/sec/image4.png",
                  "/gallery/sec/image5.png",
                  "/gallery/sec/image6.png",
                  "/gallery/sec/image7.png",
                  "/gallery/sec/image8.png",
                  "/gallery/sec/image9.png",
                  "/gallery/sec/image10.png",
                  "/gallery/sec/image11.png",
                  "/gallery/sec/image12.png",
                  "/gallery/sec/image13.png",
                  "/gallery/sec/image14.png",
                  "/gallery/sec/image15.png",]
       },
    ],    
    
  }
};

// ── Portal Lightbox ───────────────────────────────────────────────────────────
function Lightbox({ images, index, onClose, onPrev, onNext }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape")     onClose();
      if (e.key === "ArrowLeft")  onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onPrev, onNext]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <motion.div
      className="fixed inset-0 bg-black/95 flex flex-col items-center justify-center p-4 md:p-10"
      style={{ zIndex: 99999 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      {/* Close */}
      <button
        className="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white transition-colors"
        onClick={onClose}
        aria-label="Close"
      >
        <X size={32} />
      </button>

      <div
        className="relative w-full max-w-6xl h-full flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Prev */}
        <button
          onClick={onPrev}
          className="hidden md:flex absolute left-[-60px] text-white/50 hover:text-white transition-colors"
          aria-label="Previous"
        >
          <ChevronLeft size={48} />
        </button>

        <motion.img
          key={index}
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          src={images[index]}
          className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl"
          alt="Selected Event"
        />

        {/* Next */}
        <button
          onClick={onNext}
          className="hidden md:flex absolute right-[-60px] text-white/50 hover:text-white transition-colors"
          aria-label="Next"
        >
          <ChevronRight size={48} />
        </button>
      </div>

      {/* Thumbnail Strip */}
      <div
        className="flex gap-2 mt-8 overflow-x-auto pb-4 max-w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => onNext(idx)} // handled via parent setter
            className={`flex-shrink-0 w-16 h-12 md:w-24 md:h-16 rounded-md overflow-hidden border-2 transition-all ${
              index === idx ? "border-primary scale-105" : "border-transparent opacity-40 hover:opacity-100"
            }`}
          >
            <img src={img} className="w-full h-full object-cover" alt="" />
          </button>
        ))}
      </div>

      {/* Counter */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-sm">
        {index + 1} / {images.length}
      </div>
    </motion.div>,
    document.body
  );
}

// ── Main Component ────────────────────────────────────────────────────────────
export default function EventsGallery() {
  const [selectedYear, setSelectedYear]         = useState("2026-2027");
  const [selectedIndex, setSelectedIndex]       = useState(null);
  const [activeEventImages, setActiveEventImages] = useState([]);
  const [carouselStates, setCarouselStates]     = useState({});
  const [isDropdownOpen, setIsDropdownOpen]     = useState(false);
  const [mounted, setMounted]                   = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => { setMounted(true); }, []);

  // Init carousel state with unique IDs (fixed duplicate IDs in original data)
  useEffect(() => {
    const states = {};
    Object.values(EVENTS_DATA.eventsByYear).forEach((yearEvents) => {
      yearEvents.forEach((event) => {
        if (event.images?.length > 1) states[event.id] = 0;
      });
    });
    setCarouselStates(states);
  }, []);

  // Auto-advance carousels
  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselStates((prev) => {
        const next = { ...prev };
        Object.keys(next).forEach((key) => {
          const id = parseInt(key);
          let event = null;
          Object.values(EVENTS_DATA.eventsByYear).forEach((yearEvents) => {
            const found = yearEvents.find((e) => e.id === id);
            if (found) event = found;
          });
          if (event?.images?.length > 1) {
            next[key] = (next[key] + 1) % event.images.length;
          }
        });
        return next;
      });
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target))
        setIsDropdownOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Lock scroll when lightbox open
  useEffect(() => {
    document.body.style.overflow = selectedIndex !== null ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [selectedIndex]);

  const openLightbox = (event) => {
    if (!event.images?.length) return;
    setActiveEventImages(event.images);
    setSelectedIndex(0);
  };

  const handleClose = useCallback(() => setSelectedIndex(null), []);
  const handlePrev  = useCallback(() =>
    setSelectedIndex((p) => (p - 1 + activeEventImages.length) % activeEventImages.length),
  [activeEventImages.length]);
  const handleNext  = useCallback((idx) =>
    setSelectedIndex(typeof idx === "number" ? idx : (p) => (p + 1) % activeEventImages.length),
  [activeEventImages.length]);

  const handleCarouselClick = (eventId, direction, e) => {
    e.stopPropagation();
    const event = EVENTS_DATA.eventsByYear[selectedYear].find((ev) => ev.id === eventId);
    if (!event?.images || event.images.length <= 1) return;
    setCarouselStates((prev) => ({
      ...prev,
      [eventId]: direction === "next"
        ? (prev[eventId] + 1) % event.images.length
        : (prev[eventId] - 1 + event.images.length) % event.images.length,
    }));
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50 p-4 md:p-8 max-w-[1400px] mx-auto min-h-screen">

      {/* Header */}
      {/* Header */}
        <section className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-8 md:mt-16 mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800">Gallery</h2>

        <div className="relative w-full sm:w-48" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center justify-between w-full px-5 py-3 bg-white border border-slate-200 rounded-xl font-bold shadow-sm hover:border-primary transition-colors"
          >
            {selectedYear}
            <ChevronDown size={18} className={`transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
          </button>

          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="absolute top-full mt-2 w-full bg-white border border-slate-100 rounded-xl shadow-xl overflow-hidden"
                style={{ zIndex: 100 }}
              >
                {EVENTS_DATA.years.map((year) => (
                  <button
                    key={year}
                    onClick={() => { setSelectedYear(year); setIsDropdownOpen(false); }}
                    className={`w-full px-5 py-3 text-left font-bold transition-colors ${
                      selectedYear === year ? "bg-primary text-white" : "hover:bg-blue-50 text-slate-600"
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {EVENTS_DATA.eventsByYear[selectedYear].map((event) => {
          const images = event.images || [];
          const hasMultiple = images.length > 1;
          const currentIndex = carouselStates[event.id] || 0;
          const currentImage = images[currentIndex] || images[0];

          return (
            <motion.div
              layout
              key={event.id}
              onClick={() => openLightbox(event)}
              className={`relative overflow-hidden rounded-2xl bg-white group cursor-pointer shadow-md hover:shadow-xl transition-all duration-300
                ${event.size === "large" ? "sm:col-span-2 aspect-[16/10] md:aspect-[16/7]" : "col-span-1 aspect-[4/3]"}
              `}
            >
              <div className="relative h-full w-full">
                <motion.img
                  key={`${event.id}-${currentIndex}`}
                  initial={{ opacity: 0.8 }}
                  animate={{ opacity: 1 }}
                  src={currentImage}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  alt={event.title}
                />

                {hasMultiple && (
                  <div className="absolute inset-0 flex items-center justify-between px-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={(e) => handleCarouselClick(event.id, "prev", e)}
                      className="bg-black/40 backdrop-blur-sm text-white p-2 rounded-full hover:bg-black/60 transition-colors"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={(e) => handleCarouselClick(event.id, "next", e)}
                      className="bg-black/40 backdrop-blur-sm text-white p-2 rounded-full hover:bg-black/60 transition-colors"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-4 md:p-6">
                  {event.categoryTitle && (
                    <span className="text-blue-400 text-xs font-bold uppercase tracking-wider mb-1">
                      {event.categoryTitle}
                    </span>
                  )}
                  <h3 className="text-white font-bold text-sm md:text-base leading-tight line-clamp-2">
                    {event.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Lightbox — Portal on document.body */}
      {mounted && selectedIndex !== null && (
        <AnimatePresence>
          <Lightbox
            images={activeEventImages}
            index={selectedIndex}
            onClose={handleClose}
            onPrev={handlePrev}
            onNext={handleNext}
          />
        </AnimatePresence>
      )}
    </div>
  );
}
