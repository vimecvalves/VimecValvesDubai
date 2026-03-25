import { languages } from '@/i18n/ui';
import { Icon } from '@iconify/react';

import { useEffect, useState } from 'react';

const LanguageSwitcher = ({ locale }: { locale: string }) => {
  const [toggle, setToggle] = useState(false);
  const [language, setLanguage] = useState(locale);

  const findLang = languages.find((item) => item.lang === language);
  const currentPath: string =
    typeof window !== 'undefined' ? window.location.pathname : '';
  const page =
    currentPath.replace(`/${language}/`, '').length > 1
      ? currentPath.replace(`/${language}/`, '')
      : '';

  function handleLangChange(lang: string) {
    if (language === lang) return;

    setLanguage(lang);
    // localStorage.setItem('lang', lang);
    window.location.href = '/' + lang + '/' + page;

    setToggle(false);
  }

  // useEffect(() => {
  //   const savedLang = localStorage.getItem('lang');
  //   if (savedLang && savedLang !== language) {
  //     setLanguage(savedLang!);
  //     window.location.href = `/${savedLang}`;
  //   }
  // }, []);

  return (
    <div className="flex items-center justify-center relative ">
      <div
        onClick={() => setToggle(!toggle)}
        className="flex items-center justify-center gap-4 text-white cursor-pointer"
      >
        <Icon icon={findLang?.flag!} />
        {findLang?.text}
        <Icon
          icon="fe:arrow-up"
          className={` duration-300 ${toggle ? '' : 'rotate-180'} `}
        />
      </div>

      <menu
        className={`absolute left-0 top-10  z-10 bg-white  py-3  rounded-md  flex flex-col shadow-lg duration-300 ease-out w-fit ${
          toggle
            ? 'translate-y-0 pointer-events-auto'
            : 'translate-y-full pointer-events-none opacity-0'
        }`}
      >
        {languages.map((item, idx) => (
          <li
            key={idx}
            onClick={() => handleLangChange(item.lang)}
            className="flex items-center shrink-0 justify-start gap-3 hover:bg-slate-50 duration-300 px-3 py-2 cursor-pointer"
          >
            <Icon icon={item.flag} />
            {item.text}
          </li>
        ))}
      </menu>
    </div>
  );
};

export default LanguageSwitcher;
