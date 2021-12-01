import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: "user",
    initialState: {
        curruser: JSON.parse(localStorage.getItem("user")),
        isFetching: false,
        error: false
    },
    reducers: {
        loginStart: (state) => {
            state.isFetching = true;
        },
        loginSuccess: (state, action) => {
            state.isFetching = false;
            state.curruser = action.payload
        },
        loginFailure: (state) => {
            state.error = true;
        },
        logOut: (state) => {
            state.user = null;
            localStorage.removeItem('user')
        }
    }
})

export const { logOut, loginFailure, loginStart, loginSuccess } = userSlice.actions
export default userSlice.reducer