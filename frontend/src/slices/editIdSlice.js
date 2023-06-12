import { createSlice } from '@reduxjs/toolkit'

// The slice that handles updating and deletin a single record

const editIdSlice = createSlice({
    name: "editId",
    initialState: {
        id: ""
    },

    reducers: {
        editId: (state, action) => {
            state.id = action.payload
        },

        resetId: (state) => {
            state.id = ""
        }
    }
})

export const { editId, resetId } = editIdSlice.actions

export default editIdSlice.reducer