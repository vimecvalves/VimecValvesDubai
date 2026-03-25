import { twMerge } from 'tailwind-merge';

export const CustomBtn = ({
  invert = false,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & { invert?: boolean }) => (
  <a
    {...props}
    href={props.href}
    className={twMerge(
      `px-6 py-2.5 border  rounded-md font-medium text-center duration-300 cursor-pointer ${invert ? 'text-white bg-vim-blue hover:bg-white hover:text-vim-blue border-2 border-vim-blue' : 'hover:text-white text-vim-blue hover:bg-vim-blue border-vim-blue'}`,
      props.className,
    )}
  >
    {props.children}
  </a>
);

export const CustomBtnB = ({
  invert = false,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { invert?: boolean }) => (
  <button
    {...props}
    className={twMerge(
      `px-6 py-2.5 border  rounded-md font-medium text-center duration-300 cursor-pointer ${invert ? 'text-white bg-vim-blue hover:bg-white hover:text-vim-blue border-2 border-vim-blue' : 'hover:text-white text-vim-blue hover:bg-vim-blue border-vim-blue'}`,
      props.className,
    )}
  >
    {props.children}
  </button>
);
