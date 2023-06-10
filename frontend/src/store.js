import { configureStore } from '@reduxjs/toolkit'
import editIdSliceReducer from './slices/editIdSlice'

const store = configureStore({
    reducer: {
        editId: editIdSliceReducer
    },

})

export default store