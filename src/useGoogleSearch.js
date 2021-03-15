import React,{useState, useEffect} from 'react'


const useGoogleSearch=(term)=> {
    const [data,setdata]=useState(null)
    useEffect(() => {
       
       const featchData = async() => {
           fetch(
               `https://www.googleapis.com/customsearch/v1?key=${process.env.REACT_APP_API_KEY}&cx=${process.env.REACT_APP_CONTEXT_KEY}&q=${term}`
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
