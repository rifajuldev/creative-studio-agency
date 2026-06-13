import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseUrl = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:5000/api/v1'

const publicBaseQuery = fetchBaseQuery({
  baseUrl,
  credentials: 'omit',
  prepareHeaders: (headers) => {
    headers.set('Accept', 'application/json')
    return headers
  },
})

export const api = createApi({
  reducerPath: 'baseApi',
  baseQuery: publicBaseQuery,
  tagTypes: ['brief', 'booking'],
  endpoints: () => ({}),
})
