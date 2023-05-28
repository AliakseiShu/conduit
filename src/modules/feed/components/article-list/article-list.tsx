import React, { FC } from 'react';
import { Article } from "../article/article";
import { IFeedArticles } from "../../api/dto/global-feed-in";

interface IArticleList {
   list: IFeedArticles[]
}

export const ArticleList:FC<IArticleList> = ({list}) => {
  return (
   <div className="w-3/4">
      {list.map((article) => (
        <Article key={article.slug} {...article}/>
      ))}
   </div>
  );
};

