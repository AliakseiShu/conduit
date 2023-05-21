import React from 'react';
import { Container } from "../container/container";
import { ArticleList } from "../article-list/article-list";

export const Feed = () => {
  return (
    <Container>
      <div className="flex">
        <ArticleList/>
        <div className="w-1/4">tags</div>
      </div>
    </Container>
  );
};
