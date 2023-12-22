import axios from 'axios';
const URL='http://localhost:8000'

export const authenticationSignup =async(data)=>{
    console.log(data);
    try{
await axios.post(`${URL}/signup`,data)
    }
    catch(error){
        console.log("Error while calling signup api",error);
    }
}

export const authenticationLogin =async(data)=>{
    try{

const response=await axios.post(`${URL}/login`,data)
return response;
    }
    catch(error){
        console.log("Error while calling login api",error);
       return error.response;
    }
}

