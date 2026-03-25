import React, { useState } from 'react';

import { getRelativeLocaleUrl } from 'astro:i18n';
import { ui } from '@/i18n/ui';
import { Icon } from '@iconify/react';
import main_padding from '@/styles/padding';
import SearchComponent from './SearchComponent';
import { CustomBtn } from '@/ui/buttons';
import { socialMedia } from '@/libs/content/mics';

const MobileMenu = ({
  links,
  locale,
  searchData,
}: {
  links: {
    key: string;
    link: string;
    list?: {
      title: never;
      link: string;
    }[];
  }[];
  locale: string;
  searchData: any;
}) => {
  const [toggle, setToggle] = useState(false);
  const [subMenu, setSubMenu] = useState<number>();

  const OpenMenuOverlay = () => {
    return (
      <div
        className={`fixed inset-0 z-[999] isolate overflow-y-scroll duration-300 bg-white w-full h-full ${main_padding.x} py-6 flex flex-col ${toggle ? 'translate-y-0 opacity-100 pointer-events-auto' : 'translate-y-20 opacity-0 pointer-events-none'}`}
      >
        <button
          onClick={() => setToggle(!toggle)}
          className="self-end relative  flex flex-col items-center justify-evenly p-2 w-10 h-10 border-2 border-vim-blue rounded-lg gap-1 mb-6 -z-10"
        >
          <span
            className={`w-full h-0.5 bg-vim-blue rounded-full duration-300 ${toggle && 'rotate-45  translate-y-[7px]'}`}
          />

          <span
            className={`w-full h-0.5 bg-vim-blue rounded-full duration-300 ${toggle && 'opacity-0'}`}
          />
          <span
            className={`w-full h-0.5 bg-vim-blue rounded-full duration-300 ${toggle && '-rotate-45  translate-y-[-7px]'}`}
          />
        </button>

        <SearchComponent data={searchData} />

        <menu
          className={`text-black w-full flex flex-col  gap-2 mt-auto pt-6 duration-300 -z-10 `}
        >
          {links.map((item, idx) => (
            <li
              key={idx}
              onClick={() => setSubMenu(idx)}
              className="fle flex-col items-center justify-center group/n relative z-0 py-4 border-b border-[#C1C1C1] last:border-0"
            >
              <a
                onClick={(e) => {
                  if (item.list) {
                    setSubMenu(subMenu === idx ? undefined : idx);
                    subMenu !== idx && e.preventDefault();
                  }
                }}
                href={getRelativeLocaleUrl(locale, item.link)}
                className="flex items-center justify-start gap-2"
              >
                {ui[locale].sections.nav[item.key]}
                {item.list && (
                  <Icon
                    icon="weui:arrow-outlined"
                    className="text-2xl max-xl:text-xl group-hover/n:-rotate-90 rotate-90 duration-500"
                  />
                )}
              </a>

              {item.list && subMenu === idx && (
                <ul className="text-start duration-300 starting:-translate-x-5 flex flex-col gap-2  p-4 ">
                  {item.list.map((subItem) => (
                    <a
                      key={idx + subItem.title}
                      href={`/${locale + '/' + subItem.link}`}
                      className="hover:text-black/80"
                    >
                      {subItem.title}
                    </a>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </menu>
        <CustomBtn
          href={getRelativeLocaleUrl(locale, 'contact_us')}
          className=" mt-20 -z-10 capitalize"
        >
          {ui[locale].buttons.contact}
        </CustomBtn>

        <div className="flex items-center justify-center w-full mt-8 -z-10 border-t border-[#C1C1C1]">
          <menu className="flex items-center justify-center gap-4 bg-white  -translate-y-1/2   ">
            {socialMedia.map((item, idx) => (
              <a
                key={item.link + idx}
                href={item.link}
                target="_blank"
                className="aspect-square p-1 rounded h-auto flex items-center justify-center border border-current text-vim-blue  "
              >
                <Icon icon={item.icon} />
              </a>
            ))}
          </menu>
        </div>

        <a
          href="mailto:sales@vimecvalves.co.uk"
          className="flex items-center justify-start gap-1 mx-auto -z-10"
        >
          <Icon icon="material-symbols-light:mail" className="text-vim-blue" />{' '}
          sales@vimecvalves.co.uk
        </a>
      </div>
    );
  };

  return (
    <div className="lg:hidden z-0">
      <button
        onClick={() => setToggle(!toggle)}
        className=" relative z-0 flex flex-col items-center justify-evenly p-2 w-10 h-10 border-2 border-vim-blue rounded-lg gap-1 "
      >
        <span
          className={`w-full h-0.5 bg-vim-blue rounded-full duration-300 ${toggle && 'rotate-45  translate-y-[7px]'}`}
        />

        <span
          className={`w-full h-0.5 bg-vim-blue rounded-full duration-300 ${toggle && 'opacity-0'}`}
        />
        <span
          className={`w-full h-0.5 bg-vim-blue rounded-full duration-300 ${toggle && '-rotate-45  translate-y-[-7px]'}`}
        />
      </button>

      <OpenMenuOverlay />
    </div>
  );
};

export default MobileMenu;
