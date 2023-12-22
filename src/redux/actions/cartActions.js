import axios from "axios"
import * as actionTypes from '../constants/cartConstant';


export const addToCart=(id ,quantity)=>async(dispatch)=>{
try{
 const {data}=  await axios.get(`http://localhost:8000/product/${id}`);
 console.log('Data from API:', data);
 dispatch({ type: actionTypes.ADD_TO_CART, payload: {...data,quantity }});

}
catch(error){
    dispatch({ type: actionTypes.ADD_TO_CART_ERROR, payload: error.message });

}

};
export const removeFromCart=(id)=>(dispatch)=>{
    dispatch({type:actionTypes.REMOVE_FROM_CART,payload:id});
};