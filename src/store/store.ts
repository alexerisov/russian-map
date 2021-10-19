import { configureStore } from '@reduxjs/toolkit'
import { regionsSlice } from '../api/regionsApi'

export default configureStore({
    reducer: {
        [regionsSlice.reducerPath]: regionsSlice.reducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(regionsSlice.middleware)
})

