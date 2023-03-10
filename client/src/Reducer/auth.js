import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
  
} from '../app/modules/actions/auth/types';
import { UPDATE_ME_USER } from '../app/modules/actions/customers/customerTypes';
const initialState = {
    token:localStorage.getItem('token'),
    isAuthenticated:null,
    loading:true,
    user:null
};

export default function authFunc(state=initialState, action) {
    const {type , payload} = action;
    switch(type){
        case USER_LOADED:
        case UPDATE_ME_USER:    
            return{
                ...state,
                isAuthenticated: true,
                loading:false,
                user:payload,
            };
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            
            localStorage.setItem('token', payload.token);
            return {
                ...state,
                ...payload,
                isAuthenticated:true,
                loading:false,
            };
            case AUTH_ERROR:
            case REGISTER_FAIL:
            case LOGIN_FAIL:   
            case LOGOUT:
                localStorage.removeItem('token');
                return {
                    ...state,
                   token:null,
                    isAuthenticated:false,
                    loading:false,
                    user:null,
                };
                default:
                    return state;
    } 

}