import React, { useCallback, useEffect, useRef, useState } from 'react';

interface GalleryImage {
  fields: {
    file: {
      url: string;
      fileName: string;
      details?: { image?: { width: number; height: number } };
    };
    title?: string;
  };
  sys: { id: string };
}

interface GalleryLightboxProps {
  images: GalleryImage[];
  activeIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
  local: string;
}

const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  images,
  activeIndex,
  onClose,
  onNavigate,
}) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  // 'none' = opening, 'next' = sliding left, 'prev' = sliding right
  const [direction, setDirection] = useState<'none' | 'next' | 'prev'>('none');
  // animKey increments on each navigation to force React to remount the img
  const [animKey, setAnimKey] = useState(0);

  const goPrev = useCallback(() => {
    setDirection('prev');
    setAnimKey((k) => k + 1);
    onNavigate(activeIndex === 0 ? images.length - 1 : activeIndex - 1);
  }, [activeIndex, images.length, onNavigate]);

  const goNext = useCallback(() => {
    setDirection('next');
    setAnimKey((k) => k + 1);
    onNavigate((activeIndex + 1) % images.length);
  }, [activeIndex, images.length, onNavigate]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [onClose, goNext, goPrev]);

  const current = images[activeIndex];
  if (!current) return null;

  const imgUrl = current.fields.file.url + '?fm=webp&q=85&w=1600';
  const altText = current.fields.title ? String(current.fields.title) : 'Gallery image';

  // Pick animation name based on nav direction
  const imgAnimation =
    direction === 'next'
      ? 'slideInFromRight 420ms cubic-bezier(0.22,1,0.36,1)'
      : direction === 'prev'
        ? 'slideInFromLeft 420ms cubic-bezier(0.22,1,0.36,1)'
        : 'lightboxZoomIn 370ms cubic-bezier(0.22,1,0.36,1)';

  // Shared button base style
  const navBtnBase: React.CSSProperties = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 100000,
    background: 'transparent',
    border: '2px solid #1e40af',
    borderRadius: '50%',
    width: 52,
    height: 52,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    color: '#1e40af',
    fontSize: 30,
    lineHeight: 1,
    transition: 'all 200ms ease',
  };

  return (
    <div
      ref={overlayRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255,255,255,0.85)',
        backdropFilter: 'blur(4px)',
        animation: 'lightboxFadeIn 250ms ease-out',
        overflow: 'hidden',
      }}
      onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
    >
      {/* Close button */}
      <button
        onClick={onClose}
        style={{
          position: 'absolute',
          top: 16,
          right: 16,
          zIndex: 100000,
          background: 'transparent',
          border: '2px solid #e11d2e',
          borderRadius: '50%',
          width: 48,
          height: 48,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          color: '#e11d2e',
          fontSize: 20,
          fontWeight: 700,
          transition: 'all 200ms ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = '#e11d2e';
          e.currentTarget.style.color = 'white';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'transparent';
          e.currentTarget.style.color = '#e11d2e';
        }}
        aria-label="Close viewer"
      >
        ✕
      </button>

      {/* Previous button */}
      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); goPrev(); }}
          style={{ ...navBtnBase, left: 12 }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#1e40af';
            e.currentTarget.style.color = 'white';
            e.currentTarget.style.transform = 'translateY(-50%) scale(1.08)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = '#1e40af';
            e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
          }}
          aria-label="Previous image"
        >
          ‹
        </button>
      )}

      {/* Next button */}
      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); goNext(); }}
          style={{ ...navBtnBase, right: 12 }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#1e40af';
            e.currentTarget.style.color = 'white';
            e.currentTarget.style.transform = 'translateY(-50%) scale(1.08)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = '#1e40af';
            e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
          }}
          aria-label="Next image"
        >
          ›
        </button>
      )}

      {/* Image — key+animKey forces remount so animation always replays */}
      <img
        key={`${activeIndex}-${animKey}`}
        src={imgUrl}
        alt={altText}
        loading="eager"
        decoding="async"
        style={{
          maxHeight: '90vh',
          maxWidth: 'calc(100vw - 120px)',
          objectFit: 'contain',
          borderRadius: 8,
          boxShadow: 'none',
          userSelect: 'none',
          pointerEvents: 'none',
          animation: imgAnimation,
        }}
      />

      {/* Counter */}
      <div
        style={{
          position: 'absolute',
          bottom: 32,
          left: '50%',
          transform: 'translateX(-50%)',
          color: '#1e40af',
          fontSize: 15,
          fontWeight: 500,
          letterSpacing: '0.05em',
          background: 'rgba(30,64,175,0.06)',
          padding: '6px 18px',
          borderRadius: 999,
          pointerEvents: 'none',
          zIndex: 100000,
          whiteSpace: 'nowrap',
        }}
      >
        {activeIndex + 1} / {images.length}
      </div>

      <style>{`
        @keyframes lightboxFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes lightboxZoomIn {
          from { opacity: 0; transform: scale(0.94); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes slideInFromRight {
          from { opacity: 0; transform: translateX(35px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInFromLeft {
          from { opacity: 0; transform: translateX(-35px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};

export default GalleryLightbox;
