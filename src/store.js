import {configureStore} from '@reduxjs/toolkit'
import navigationReducer from './features/navigation/navigationSlice'

export const store = configureStore({
    reducer: {
        navigation: navigationReducer,
    },
})
