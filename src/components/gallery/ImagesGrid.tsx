import { Image } from 'astro:assets';
import React, { useState } from 'react';
import ImageSlider from './ImageSlider';

const ImagesGrid = ({ data, local }: { data: any; local: string }) => {
  const [openId, setOpenId] = useState<number | null>(null);
  return (
    <>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-9 gap-y-10">
        {data.fields.images.map((item, idx) => (
          <img
            key={idx}
            onClick={() => setOpenId(idx)}
            src={item.fields.file.url + '?fm=webp&q=80'}
            alt=""
            style={{
              viewTransitionName: '_' + item.sys.id,
            }}
            width={280}
            height={280}
            className="object-cover cursor-pointer rounded-md size-full"
            loading="lazy"
            decoding="async"
          />
        ))}
      </div>
      <ImageSlider
        data={data}
        local={local}
        openId={openId}
        setOpenId={setOpenId}
      />
    </>
  );
};

export default ImagesGrid;
