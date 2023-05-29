import { createApi } from '@reduxjs/toolkit/query/react'
import { axiosBaseQuery } from "../../../core/axios-base-query";
import { GlobalFeedIn } from "./dto/global-feed-in";
import { EndpointBuilder } from "@reduxjs/toolkit/dist/query/endpointDefinitions";
import { BASE_URL, FEED_PAGE_SIZE } from "../consts";

interface IGlobalFeedParams {
  page: number
}

export const feedApi = createApi({
  reducerPath: 'feedApi',
  baseQuery: axiosBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder: EndpointBuilder<void, string, string>) => ({
    getGlobalFeed: builder.query<GlobalFeedIn, IGlobalFeedParams>({
      query: ({page}) => ({
        url: '/articles',
        method: 'get',
        params: {
          limit: FEED_PAGE_SIZE,
          offset: page * FEED_PAGE_SIZE
        }
      }),
    }),
  }),
})

export const {useGetGlobalFeedQuery} = feedApi