import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { domain } from '../utils/constants'
import {RegionType} from "../types";

type RegionsArray = Array<RegionType>

export const regionsSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: domain }),
    endpoints: builder => ({
        getRegions: builder.query<RegionsArray, void>({
            query: () => '/regions',
            transformResponse: (rawResult: RegionsArray ) => {
                return rawResult
            }
        })
    })
})

export const { useGetRegionsQuery } = regionsSlice