import { Container } from "../../../../common/components/container/container";
import { ArticleList } from "../article-list/article-list";
import { FeedToggle } from "../feed-toggle/feed-toggle";
import { useGetGlobalFeedQuery } from "../../api/repository";

export const Feed = () => {
    const {data, isLoading, error} = useGetGlobalFeedQuery()
  if(isLoading) {
    return (
      <Container>
        Feed loading...
      </Container>
    )
  }

  if(error) {
    return (
      <Container>
        Error while loading feed
      </Container>
    )
  }

  return (
    <Container>
      <FeedToggle/>
      <div className="flex">
        <ArticleList list={data?.articles || []}/>
        <div className="w-1/4">tags</div>
      </div>
    </Container>
  );
};
