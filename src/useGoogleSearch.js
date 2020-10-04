import React,{useState, useEffect} from 'react'
import API_KEY from './api_key';
const CONTEXT_KEY ="98254c7d03bae35c0";
const useGoogleSearch=(term)=> {
    const [data,setdata]=useState(null)
    useEffect(() => {
       const featchData = async() => {
           fetch(
               `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
           ).then(res => res.json())
           .then(result =>{
            setdata(result)
           })
       }
        featchData() ; 
    }, [term])
    return { data }
}
export default useGoogleSearch;
