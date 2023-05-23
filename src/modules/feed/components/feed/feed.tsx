import React from 'react';
import { Container } from "../../../../common/components/container/container";
import { ArticleList } from "../article-list/article-list";
import { FeedToggle } from "../feed-toggle/feed-toggle";

export const Feed = () => {
  return (
    <Container>
      <FeedToggle/>
      <div className="flex">
        <ArticleList/>
        <div className="w-1/4">tags</div>
      </div>
    </Container>
  );
};
