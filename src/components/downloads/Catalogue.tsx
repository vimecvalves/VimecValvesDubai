import { ui } from '@/i18n/ui';
import { CustomBtnB } from '@/ui/buttons';
import { Icon } from '@iconify/react/dist/iconify.js';
import { useRef, useState } from 'react';
import { templateIDDonw } from '@/libs/emailjs';

import type { TypeProductCategoryFields } from '@/libs/content/contentful/modules/TypeDownloadFormBlocks';

type Item = {
  fields: {
    file?: {
      fields: {
        file: {
          url: string;
        };
      };
    };
    link: string;
    bannerImage?: {
      fields: {
        file: {
          url: string;
          fileName?: string;
        };
        title?: string;
      };
    };
    title?: string;
    form?: TypeProductCategoryFields;
    needForm?: boolean;
  };
};

interface CatalogueProps {
  item: Item;
  local: 'en' | 'it';
}

const Catalogue: React.FC<CatalogueProps> = ({ item, local }) => {
  const [openItem, setOpenItem] = useState<Item | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  function handleClick(item: Item) {
    if (item.fields.needForm === true) {
      setOpenItem(item);
    } else if (item.fields.needForm === false) {
      window.open(
        item?.fields.link ?? item?.fields?.file?.fields.file.url,
        '_blank',
      );
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(formRef.current!);

    let firstName = formData.get('firstName');
    let lastName = formData.get('lastName');
    let mobile = formData.get('phone');
    let email = formData.get('email');
    let company = formData.get('company');

    try {
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          templateID: templateIDDonw,
          templateParams: {
            name: `${firstName} ${lastName}`,
            mobile: mobile,
            email: email,
            company: company,
          }
        })
      });

      if (response.ok) {
        formRef.current?.reset();
        window.open(
          openItem?.fields.link ?? openItem?.fields?.file?.fields.file.url,
          '_blank',
        );
        setOpenItem(null);
      } else {
        console.error('Email sending failed:', await response.text());
        return { success: false, error: 'Failed to send email.' };
      }
    } catch (error) {
      console.error('Email sending failed:', error);
      return { success: false, error: 'Failed to send email.' };
    }
  }

  return (
    <>
      <div
        id={encodeURI(item.fields.title!)}
        onClick={() => handleClick(item)}
        className="reveal-up group flex w-full flex-col items-start justify-start bg-gradient-to-br from-[#f9fbff] via-white to-[#f6faff] rounded-2xl shadow-[0_4px_10px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_32px_rgba(0,0,0,0.12)] hover:-translate-y-[6px] transition-all duration-400 ease-out overflow-hidden cursor-pointer"
      >
        {item?.fields.bannerImage?.fields?.file?.url && (
          <div className="mx-4 mt-4 aspect-video overflow-hidden rounded-xl w-[calc(100%-2rem)] flex-shrink-0 bg-gray-50">
            <img
              src={item?.fields?.bannerImage?.fields?.file?.url + '?fm=webp&w=600&q=80'}
              width={600}
              height={400}
              alt={
                item.fields.bannerImage.fields.file.fileName ||
                item.fields.title ||
                'Download banner'
              }
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
          </div>
        )}
        <div className="px-6 py-5 flex items-center justify-between gap-4 w-full mt-auto">
          <h3 className="text-xl font-medium leading-snug text-gray-900 group-hover:text-vim-blue transition-colors duration-300 line-clamp-2">
            {item?.fields?.title}
          </h3>
          <span className="flex-shrink-0 flex items-center justify-center p-3 rounded-full bg-blue-50 text-vim-blue group-hover:bg-vim-blue group-hover:text-white transition-colors duration-300">
            <Icon icon={item.fields.form?.fields.buttonsIcon || 'lucide:download'} className="text-xl" />
          </span>
        </div>
      </div>
      {openItem && item.fields.needForm === true && (
        <div className="fixed inset-0 z-[1000] flex min-h-screen items-start justify-center overflow-y-auto bg-black/60 py-20 md:items-center">
          <div className="relative flex w-[min(500px,90vw)] flex-col rounded-[30px] bg-white p-10">
            <h2 className="mb-4 text-2xl font-semibold">
              {item.fields.form?.fields.title}
            </h2>
            <p className="w-[min(100%,80vw)]">
              {item.fields.form?.fields.subtile}
            </p>

            <form
              onSubmit={handleSubmit}
              ref={formRef}
              className={`mt-5 flex w-full flex-col items-start justify-center overflow-hidden duration-300`}
            >
              <div className="flex w-full flex-col gap-6">
                <div className="grid w-full gap-4 sm:grid-cols-2">
                  <label className="flex w-full flex-col gap-1">
                    <h4>{ui[local].downloads.form['fName']}</h4>
                    <input
                      type="text"
                      name="firstName"
                      required
                      className="w-full rounded-xl border bg-white/10 px-3 py-2"
                    />
                  </label>
                  <label className="flex w-full flex-col gap-1">
                    <h4>{ui[local].downloads.form['lName']}</h4>
                    <input
                      type="text"
                      name="lastName"
                      className="w-full rounded-xl border bg-white/10 px-3 py-2"
                    />
                  </label>
                </div>

                <label className="flex w-full flex-col gap-1">
                  <h4>{ui[local].downloads.form['companyName']}</h4>
                  <input
                    type="text"
                    name="company"
                    required
                    className="w-full rounded-xl border bg-white/10 px-3 py-2"
                  />
                </label>

                <div className="grid w-full gap-4 sm:grid-cols-2">
                  <label className="flex w-full flex-col gap-1">
                    <h4>{ui[local].downloads.form['email']}</h4>
                    <input
                      type="text"
                      name="email"
                      required
                      className="w-full rounded-xl border bg-white/10 px-3 py-2"
                    />
                  </label>
                  <label className="flex w-full flex-col gap-1">
                    <h4>{ui[local].downloads.form['mobile']}</h4>
                    <input
                      type="text"
                      name="phone"
                      className="w-full rounded-xl border bg-white/10 px-3 py-2"
                    />
                  </label>
                </div>
              </div>
              <CustomBtnB
                invert
                type="submit"
                className="mt-4 flex items-center justify-center gap-6 uppercase"
              >
                {openItem.fields.form?.fields.button}{' '}
                <Icon icon={item.fields.form?.fields.buttonsIcon!} />
              </CustomBtnB>
            </form>

            <button
              type="button"
              onClick={() => setOpenItem(null)}
              className="absolute -top-10 right-0 cursor-pointer rounded-lg bg-white p-1 md:-top-0 md:-right-10"
              aria-label="Close form"
            >
              <Icon icon="ic:baseline-close" className="text-xl text-black" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Catalogue;
