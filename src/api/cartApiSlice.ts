import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {baseQueryWithReauth} from './interceptorsSlice';
interface ToDo {
  id: number;
  name: string;
  price: number;
}

export const apiSlice = createApi({
  reducerPath: 'items',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['item'], // There are some other advance cache Recipes like > Optimistic Updates > Pessimistic Updates ...
  endpoints: (builder) => ({
    getItems: builder.query<any, number | void>({
      query: (_limit = 10) => ({
        url: `/items`,
      }),
      providesTags: ['item'],
    }),
  }),
});

export const {useLazyGetItemsQuery} = apiSlice;
