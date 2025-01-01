import axios from 'axios';

import { 
    USER_LOGIN_REQ,
    USER_LOGIN_REQ_FAIL,
    USER_LOGIN_REQ_SUCCESS,

    USER_LOGOUT,

    USER_REGISTER_REQ,
    USER_REGISTER_REQ_FAIL,
    USER_REGISTER_REQ_SUCCESS,
} from "../Constants/User";

//user login action
 
export const userLoginAction = (email, password) => async (dispatch)=>{
    try {
        dispatch({type: USER_LOGIN_REQ})
        const config = {
            headers: {
                "Content-Type": "application/json",
            }
        }
        const {data} = await axios.post(`${BASE_URL}/api/users/login`, {email, password}, config);
        dispatch({type: USER_LOGIN_REQ_SUCCESS, payload: data});
        localStorage.setItem("userInfo", JSON.stringify(data));

    } catch (err){
        console.log(err)

    }
}