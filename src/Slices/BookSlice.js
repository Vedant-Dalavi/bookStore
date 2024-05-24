import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    book: null,
    editBook: false,
}

const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {
        setBook: (state, action) => {
            state.course = action.payload
        },
        setEditBook: (state, action) => {
            state.editCourse = action.payload
        },
        resetCourseState: (state) => {
            state.course = null
            state.editCourse = false
        },
    },
})

export const {
    setBook,
    setEditBook,
} = bookSlice.actions

export default bookSlice.reducer