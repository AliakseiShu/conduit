import React, { FC } from 'react';
import { Article } from "../article/article";
import { IFeedArticles } from "../../api/dto/global-feed-in";

interface IArticleList {
  list: IFeedArticles[]
}

export const ArticleList: FC<IArticleList> = ({list}) => {
  return (
    <div>
      {list.map((article) => (
        <Article key={article.slug} {...article}/>
      ))}
    </div>
  );
};

