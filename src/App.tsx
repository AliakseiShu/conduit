import { FC } from "react";
import { Header } from "./common/components/header/header";
import { Banner } from "./common/components/banner/banner";
import { Article } from "./modules/feed/components/article/article";

interface AppProps {

}

export const App: FC = ({}) => {

  return (
    <div>
      <Header/>
      <Banner/>
      <Article/>
    </div>
  )
}

