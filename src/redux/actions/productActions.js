import axios from "axios";
import * as actionTypes from "../constants/productConstant";
export const getProducts   = () => async (dispatch) => {
  try {
    console.log("Products:api fetching  ");
    const { data } = await axios.get(`http://localhost:8000/products`);
    console.log("Products data:",data);
    dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: actionTypes.GET_PRODUCTS_FAIL, payload: error.message });
  }
}


export const getProductDetails = (id)=> async (dispatch)=>{
  try{
dispatch({type:actionTypes.GET_PRODUCTS_DETAILS_REQUEST})
const { data } = await axios.get(`http://localhost:8000/product/${id}`);
    console.log("Products data:",data);
    dispatch({ type: actionTypes.GET_PRODUCTS_DETAILS_SUCCESS, payload: data });
  }
    catch(error){
      dispatch({ type: actionTypes.GET_PRODUCTS_DETAILS_FAIL, payload: error.message });

    }
  
}