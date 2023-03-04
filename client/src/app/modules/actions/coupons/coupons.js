import axios from "axios";
import { GET_COUPONS,DELETE_COUPON,ADD_COUPONS, GET_EXPIRE_COUPONS } from "./types";
import {toast} from 'react-toastify'
//Function to get all Coupons


export const getAllCoupons= ()=> async dispatch =>{
try {
     const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/coupons`)
     dispatch({
         type:GET_COUPONS,
         payload : res.data
     })
} catch (error) {
    console.log(error);
}
}

//Function to Delete Coupons

export const DeleteCouponById= (id)=> async dispatch =>{
    if (window.confirm("Are You Sure You Want To Delete Code")) {
    try {
          await axios.delete(`${process.env.REACT_APP_API_URL}/api/coupons/${id}`,{headers:{"x-auth-token":localStorage.getItem("authToken")}})
         dispatch({
             type:DELETE_COUPON,
             payload : id
         })
    } catch (error) {
        console.log(error);
    }
    }
}

//Function To Add New Coupon
export const addCoupons= (formData ,history)=> async dispatch =>{
    try {
         const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/coupons`, formData,{headers:{"x-auth-token":localStorage.getItem("authToken")}})
         dispatch({
             type:ADD_COUPONS,
             payload : res.data
         })
         history.push('/admin/coupons')
    } catch (error) {
        const errors=error.response.data.errors;
        if(errors){
            errors.forEach(error => toast.error(error.msg));
        }
    }
    }
 //Function to get all Coupons about to expire

export const getAllCouponsAboutExpire= ()=> async dispatch =>{
    try {
         const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/coupons/expire/soon`)
         dispatch({
             type:GET_EXPIRE_COUPONS,
             payload : res.data
         })
    } catch (error) {
        console.log(error);
    }
    }