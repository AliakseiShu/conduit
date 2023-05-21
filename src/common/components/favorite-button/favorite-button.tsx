import React from 'react';
import { AiFillHeart } from "react-icons/all";

export const FavoriteButton = () => {
  return (
    <button
      className="flex justify-end items-center text-green text-center text-sm align-middle select-none border border-green rounded-buttonSm py-1 px-2 group hover:text-white hover:bg-green focus:text-white focus:bg-darkGreen">
      <AiFillHeart />
      <span className="ml-1 font-normal">11</span>
    </button>
  );
};

