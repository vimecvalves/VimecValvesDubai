import { ui } from '@/i18n/ui';
import type { TypeProduct } from '@/libs/content/contentful/entriesType';
import main_padding from '@/styles/padding';
import { CustomBtn } from '@/ui/buttons';
import { Icon } from '@iconify/react/dist/iconify.js';
import type { Entry } from 'contentful';
import {
  useCallback,
  useEffect,
  useState,
  type Dispatch,
  type SetStateAction,
} from 'react';

const ImageSlider = ({
  data,
  local,
  openId,
  setOpenId,
}: {
  data: Entry<TypeProduct>;
  local: string;
  openId: number | null;
  setOpenId: Dispatch<SetStateAction<number | null>>;
}) => {
  const { images } = data.fields;
  const [animated, setAnimate] = useState(false);

  const changeIndex = useCallback(
    (action: 'next' | 'prev') => {
      setAnimate(true);
      switch (action) {
        case 'next':
          if (openId! >= 0 && openId! < images.length - 1) {
            setOpenId(openId! + 1);
          }
          break;
        case 'prev':
          if (openId! > 0) {
            setOpenId(openId! - 1);
          }
          break;
      }
    },
    [openId, images.length],
  );

  useEffect(() => {
    setOpenId(openId);
  }, [openId]);

  const closeBtn = () => {
    setAnimate(false);
    setOpenId(null);
  };

  return (
    <div
      className={` fixed top-0 left-0 h-dvh z-50  items-center flex-col gap-6 flex duration-300 justify-center w-svw bg-white ${main_padding.y} ${openId === null ? 'translate-x-full bg-transparent opacity-0 pointer-events-none' : 'translate-x-0  bg-white  opacity-100 pointer-events-auto'}`}
    >
      <div
        style={{
          transform: `translateX(${openId! * -100}%)`,
          transitionDuration: animated ? '1000ms' : '0ms',
        }}
        className="wrapper flex h-full gap-5 relative z-0   ease-in-out"
      >
        {images.map((item, idx) => (
          <div
            key={idx}
            style={{
              left: idx * 100 + '%',
            }}
            className="h-full w-full flex items-center justify-center absolute "
          >
            <img
              style={{
                viewTransitionName: '_' + item.sys.id,
              }}
              src={item.fields.file.url }
              width={item.fields.file.details.image.width}
              height={item.fields.file.details.image.height}
              alt=""
              loading="lazy"
              decoding="async"
              className="object-contain h-full"
            />
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between gap-10 wrapper">
        <button
          onClick={() => closeBtn()}
          className="flex items-center justify-center gap-1 text-vim-red underline"
        >
          <Icon icon="material-symbols:close" className="" />
          {ui[local].buttons.close}
        </button>

        <div className="flex items-center justify-center gap-4">
          <CustomBtn
            onClick={() => changeIndex('prev')}
            className="px-6 text-2xl py-1 "
          >
            <Icon icon="solar:arrow-up-linear" className="-rotate-90" />
          </CustomBtn>
          <CustomBtn
            onClick={() => changeIndex('next')}
            className="px-6 text-2xl py-1 "
          >
            <Icon icon="solar:arrow-up-linear" className="rotate-90" />
          </CustomBtn>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
