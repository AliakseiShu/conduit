import { createApi } from '@reduxjs/toolkit/query/react'
import { axiosBaseQuery } from "../../../core/axios-base-query";
import { GlobalFeedIn } from "./dto/global-feed-in";
import { EndpointBuilder } from "@reduxjs/toolkit/dist/query/endpointDefinitions";

export const feedApi = createApi({
  reducerPath: 'feedApi',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://api.realworld.io/api',
  }),
  endpoints: (builder: EndpointBuilder<void, string, string>) => ({
    getGlobalFeed: builder.query<GlobalFeedIn, undefined>({
      query: () => ({
        url: '/articles',
        method: 'get'
      }),
    }),
  }),
})

export const {useGetGlobalFeedQuery} = feedApi