import { loginStart, loginSuccess, loginFailure } from "./UserRedux";
import axios from 'axios'

export const loginUser = async (dispatch, user) => {
    dispatch(loginStart())
    try {
        const res = await axios.post('users/login', user)
        dispatch(loginSuccess(res.data))
        localStorage.setItem('userInfo', JSON.stringify(res.data))
    } catch (error) {
        dispatch(loginFailure())
    }
}

