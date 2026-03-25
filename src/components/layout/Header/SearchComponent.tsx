import React, { Fragment, useMemo, useState } from 'react';
import Fuse from 'fuse.js';
import { Icon } from '@iconify/react';

const SearchComponent = ({
  data,
}: {
  data: {
    title: any;
    content: null;
    link: string;
  }[];
}) => {
  const [query, setQuery] = useState('');

  const fuseOptions = {
    keys: ['title', 'content'],
    threshold: 0.3,
  };

  const fuse = useMemo(() => new Fuse(data, fuseOptions), [data, fuseOptions]);

  const results = useMemo(() => {
    if (!query) return [];
    return fuse.search(query).slice(0, 10);
  }, [query, fuse]);

  return (
    <div className="relative z-0">
      <form
        onSubmit={(e) => e.preventDefault}
        action=""
        className="flex items-center gap-3 border-b pb-3 max-lg:justify-between"
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search here"
          className="outline-none border-none w-32"
        />
        <Icon icon="material-symbols:search" className="text-lg" />
      </form>
      {results.length > 0 && (
        <ul className="absolute left-1/2 translate-y-6 rounded-md shadow-2xl px-4 py-3 bg-white  max-w-[90vw] -translate-x-1/2 grid gap-2 w-full starting:opacity-0 duration-300 starting:translate-y-20">
          {results.map((result, idx) => (
            <Fragment key={idx}>
              <a
                href={result.item.link}
                className="max-w-[24ch] line-clamp-2 hover:opacity-45 duration-500 cursor-pointer"
              >
                {result.item.title}
              </a>
              {idx !== results.length - 1 && <hr />}
            </Fragment>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchComponent;
