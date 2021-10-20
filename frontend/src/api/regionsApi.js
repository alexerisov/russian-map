import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { domain } from '../utils/constants'

export const regionsSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: domain }),
    endpoints: builder => ({
        getPosts: builder.query({
            query: () => '/posts'
        })
    })
})

export const { useGetRegionsQuery } = regionsSlice