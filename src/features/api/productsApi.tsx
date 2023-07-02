import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IProduct } from '../../interfaces'

// Define a service using a base URL and expected endpoints
export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<IProduct[], string>({
      query: (name) => name,
    }),
  }),
})

export const { useGetAllProductsQuery } = productsApi