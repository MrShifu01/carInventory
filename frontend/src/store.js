import { configureStore } from '@reduxjs/toolkit'
import editIdSliceReducer from './slices/editIdSlice'

// Only have an editId slice and reducer to handle the app knowing which document to edit or delete
const store = configureStore({
    reducer: {
        editId: editIdSliceReducer
    },

})

export default store