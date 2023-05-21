import React from 'react';
import { Link } from "react-router-dom";
import { FavoriteButton } from "../../../../common/components/favorite-button/favorite-button";
import { TagList } from "../../../../common/components/tag-list/tag-list";

export const Article = () => {
  return (
    <article>
      <div className="border-t border-black/10 py-6">
        <div className="mb-4 font-light flex">
          <Link to="/@odin">
            <img className="inline-block w-8 h-8 align-middle rounded-full"
                 src="https://api.realworld.io/images/demo-avatar.png"
                 alt="avatar"/>
          </Link>
          <div className="mr-6 ml-0.3 inline-flex leading-4 flex flex-col ">
            <Link to="/@odin" className="font-medium">
              Zina Shulha
            </Link>
            <span className="text-date text-newGrey">21 may, 2023</span>
          </div>
          <FavoriteButton/>
        </div>
        <Link className="hover:no-underline" to="/article/qwerty">
          <h1 className="mb-1 text-2xl font-semibold text-newBlack">If we quantify the alarm</h1>
          <p className="text-lightGrey font-light mb-1">Omnis perspiciatis qui quia commodi sequi modi. Nostrum quam aut cupiditate est facere omnis possimus.</p>
         <div className="flex justify-between">
           <span className="text-date font-light text-newGrey align-middle">Read more...</span>
           <TagList/>
         </div>
        </Link>
      </div>
    </article>
  );
};
