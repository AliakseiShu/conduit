import React, { FC } from 'react';

interface TagList {
 list: string[]
}

export const TagList:FC<TagList> = ({list}) => {
  return (
      <ul className="flex">
        {list.map((tag)=>
          (<li key={tag} className="font-light text-date text-textGrey border border-borderGrey mr-1 mb-0.2 px-0.6 rounded-tag">
            {tag}</li>)
        )}
      </ul>
  );
};

