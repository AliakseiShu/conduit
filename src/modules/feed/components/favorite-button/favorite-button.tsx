import React, { FC } from 'react';
import { AiFillHeart } from "react-icons/all";

interface FavoriteButtonType {
  count: number
}

export const FavoriteButton: FC<FavoriteButtonType> = ({count}) => {
  return (
    <button
      className="flex justify-end items-center text-green text-center text-sm align-middle select-none border border-green rounded-buttonSm py-1 px-2 group hover:text-white hover:bg-green focus:text-white focus:bg-darkGreen">
      <AiFillHeart/>
      <span className="ml-1 font-normal">{count}</span>
    </button>
  );
};

