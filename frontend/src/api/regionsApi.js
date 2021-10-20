import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { domain } from '../utils/constants'

export const regionsSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: domain }),
    endpoints: builder => ({
        getRegions: builder.query({
            query: () => '/regions'
        })
    })
})

export const { useGetRegionsQuery } = regionsSlice