import axios from 'axios';
import { toast } from 'react-toastify';
import {GET_WISHLIST,REMOVE_WISHLIST,ADD_WISHLIST

  } from './types'

export const getWishlist= () => async (dispatch) => {
    const config = {
        headers:{'x-auth-token':localStorage.getItem('token')}
    }
     try {
       const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/wishlist`,{}, config);
       dispatch({
         type: GET_WISHLIST,
         payload: res.data,
       });
     } catch (error) {
       console.log(error);
     }
   };

export const addDeleteWishlist= (formData) => async (dispatch) => {
    const config = {
        headers:{'x-auth-token':localStorage.getItem('token')}
    }
     try {
       const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/wishlist`,formData, config);
       if(res.data.length === 0) {
       toast.success("Removed From Wishlist", {autoClose: 1000})
       dispatch({
        type: REMOVE_WISHLIST,
        payload: res.data,
      });
      }else{
        toast.success("Added To Wishlist", {autoClose: 1000})
        dispatch({
          type: ADD_WISHLIST,
          payload: res.data,
        });
        
      }
     } catch (error) {
       console.log(error);
     }
   };

   export const deleteWishlist = (id, history) => async (dispatch) => {
     if (window.confirm("Are You Sure You Want To Delete Product")) {
       const config = {
         headers: { "x-auth-token": localStorage.getItem("token") },
       };
       try {
        await axios.delete(
           `${process.env.REACT_APP_API_URL}/api/wishlist/${id}`,
           config
         );
         dispatch({
           type: REMOVE_WISHLIST,
           payload: id,
         });
         toast.success("removed from wishlist");
        
       } catch (error) {
         console.log(error);
                  console.log(error);
       }
     }
   };
