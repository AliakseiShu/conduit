import React, { FC } from 'react';
import { Link } from "react-router-dom";
import { FavoriteButton } from "../favorite-button/favorite-button";
import { TagList } from "../tag-list/tag-list";
import { IFeedArticles } from "../../api/dto/global-feed-in";
import { DateTime } from "luxon";

interface IArticleProps extends IFeedArticles {
}

export const Article: FC<IArticleProps> = ({author, createdAt, favoritesCount, title, tagList, description}) => {
  return (
    <article>
      <div className="border-t border-black/10 py-6">
        <div className="mb-4 font-light flex justify-between">
          <div className="flex">
            <Link to={`/@${author.username}`}>
              <img className="inline-block w-8 h-8 align-middle rounded-full"
                   src={author.image}
                   alt={`${author.username}avatar`}/>
            </Link>
            <div className="mr-6 ml-0.3 inline-flex leading-4 flex flex-col ">
              <Link to={`/@${author.username}`}
                    className="font-medium">
                {author.username}
              </Link>
              <span
                className="text-date text-newGrey">{DateTime.fromISO(createdAt).toLocaleString(DateTime.DATE_FULL)}</span>
            </div>
          </div>
          <FavoriteButton count={favoritesCount}/>
        </div>
        <Link className="hover:no-underline" to="/article/qwerty">
          <h1 className="mb-1 text-2xl font-semibold text-newBlack">{title}</h1>
          <p className="text-lightGrey font-light mb-1">{description}</p>
          <div className="flex justify-between">
            <span className="text-date font-light text-newGrey align-middle">Read more...</span>
            <TagList list={tagList}/>
          </div>
        </Link>
      </div>
    </article>
  );
};
