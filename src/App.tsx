import { FC } from "react";
import { Header } from "./common/components/header/header";
import { Banner } from "./common/components/banner/banner";
import { ArticleList } from "./modules/feed/components/article-list/article-list";
import { Feed } from "./modules/feed/components/feed/feed";

interface AppProps {
}

export const App: FC = ({}) => {

  return (
    <div>
      <Header/>
      <Banner/>
      <Feed/>
    </div>
  )
}

