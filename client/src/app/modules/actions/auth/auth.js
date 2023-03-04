import  {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
} from './types';
import {toast} from 'react-toastify'
import axios from 'axios';
import setAuthToken from '../../../utils/setAuthToken';
//Load User
export const LoadUser = () =>async dispatch => {
 if(localStorage.token){
  setAuthToken(localStorage.token);
}
  try {
     const user= await axios.get(`${process.env.REACT_APP_API_URL}/api/auth`); 
     dispatch({
     type:USER_LOADED,
     payload:user.data 
     }); 
  } catch (err) {
      dispatch({
       type:AUTH_ERROR
      });
  }
};

//USER REGISTER
export const register= (formData)=>async dispatch=>{
const config={
    headers:{
        'Content-Type':'application/json',
    }
};
// const body=  JSON.stringify({name,email,password});
try {
    alert("Registr");
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/register`,formData,config);
    console.log(res.data);
    dispatch({
        type:REGISTER_SUCCESS,
        payload: res.data,
});
dispatch(LoadUser());
toast.success('Register Success' , {autoClose:1000})

}catch (err) {
    const errors = err.response.data.errors;
    if(errors){
         errors.forEach(error => toast.error(error.msg));
     }
 dispatch({
     type:REGISTER_FAIL
 });   
}

}

//USER Login
export const login= (email,password)=>async dispatch=>{
    const config={
        headers:{
            'Content-Type':'application/json',
        }
    };
    try {
        const user = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/login`,{email , password},config);

        dispatch({
            type:LOGIN_SUCCESS,
            payload: user.data,
    });
    dispatch(LoadUser());
    toast.success('Login Success' , {autoClose:1000})
    }catch (err) {
        const errors = err.response.data.errors;
        if(errors){
             errors.forEach(error => toast.error(error.msg));
         }
     dispatch({
         type:LOGIN_FAIL
     });   
    }
    
    }

//LOGOUT 

export const logout = () => dispatch =>{
    dispatch({type: LOGOUT});
}

//Update Password

export const updatePassword = (id , currentpassword,newpassword)=>async dispatch=>{
 try {
    const res = await axios.put(`${process.env.REACT_APP_API_URL}/api/users/password/${id}`, {currentpassword ,newpassword}, { headers: { "x-auth-token": localStorage.getItem("token") } })    
    toast.success(res.data.msg)
} catch (error) {
    toast.error(error.response.data.msg);
        // toast.error(error.response.data.msg)
    }
} 