import React, { useState } from 'react';
import GalleryLightbox from './ImageSlider';

interface GalleryImage {
  fields: {
    file: {
      url: string;
      fileName: string;
      details?: {
        image?: { width: number; height: number };
      };
    };
    title?: string;
  };
  sys: { id: string };
}

const ImagesGrid = ({ data, local }: { data: any; local: string }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const images: GalleryImage[] = data?.fields?.images ?? [];

  return (
    <>
      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-8">
        {images.map((item, idx) => (
          <button
            key={item.sys.id}
            type="button"
            onClick={() => setActiveIndex(idx)}
            className="group relative aspect-square overflow-hidden rounded-lg bg-gray-100 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <img
              src={item.fields.file.url + '?fm=webp&q=80&w=600'}
              alt={item.fields.title ? String(item.fields.title) : 'Gallery image'}
              width={600}
              height={600}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {activeIndex !== null && (
        <GalleryLightbox
          images={images}
          activeIndex={activeIndex}
          onClose={() => setActiveIndex(null)}
          onNavigate={(idx) => setActiveIndex(idx)}
          local={local}
        />
      )}
    </>
  );
};

export default ImagesGrid;
