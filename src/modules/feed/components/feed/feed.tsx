import { Container } from "../../../../common/components/container/container";
import { ArticleList } from "../article-list/article-list";
import { FeedToggle } from "../feed-toggle/feed-toggle";
import { useGetGlobalFeedQuery } from "../../api/repository";
import ReactPaginate from "react-paginate";
import { FEED_PAGE_SIZE } from "../../consts";
import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { serializeSearchParams } from "../../../../utils/router";

export const Feed = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [page, setPage] = useState(searchParams.get('page') ? Number(searchParams.get('page')) : 0)
  const handlerPageChange = ({selected}: { selected: number }) => {
    setPage(selected)
    setSearchParams(serializeSearchParams({page: String(selected)}))
  }

  const {data, isLoading, error, isFetching} = useGetGlobalFeedQuery({page})

  if (isLoading | isFetching) {
    return (
      <Container>
        Feed loading...
      </Container>
    )
  }

  if (error) {
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
        <div className="w-3/4">
          <ArticleList list={data?.articles || []}/>
          <nav className="my-6">
            <ReactPaginate
              breakLabel="..."
              pageCount={Math.ceil((data?.articlesCount || 0) / FEED_PAGE_SIZE)}
              pageRangeDisplayed={Math.ceil((data?.articlesCount || 0) / FEED_PAGE_SIZE)}
              previousLabel={null}
              nextLabel={null}
              containerClassName="flex"
              pageClassName="group"
              pageLinkClassName="p-3 text-green bg-white border border-borderGrey -ml-px group-[&:nth-child(2)]:rounded-l
        group-[&:nth-last-child(2)]:rounded-r hover:bg-pageHoverBg"
              activeClassName="active group"
              activeLinkClassName="group-[.active]:bg-green group-[.active]:text-white group-[.active]:border-green"
              onPageChange={handlerPageChange}
              forcePage={page}
            />
          </nav>
        </div>

        <div className="w-1/4">tags</div>
      </div>
    </Container>
  );
};
