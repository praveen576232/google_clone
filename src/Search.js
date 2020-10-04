import React,{useState} from 'react'
import './Serach.css'
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import {useHistory} from 'react-router-dom'
import { Button } from '@material-ui/core';
import {useStateValue} from './Stateprovider';
function Search({serachText,setserachText}) {
    const history =useHistory();
    const [ {},dispath] = useStateValue();
    const search =(e) =>{
        e.preventDefault();
        console.log(serachText);
        dispath({
          type:'SAVE_TERM',
          term:serachText
        })
        history.push("serach");
      }
    return (
        <div className="serach">
            <form className="mainbody__serach">
          <SearchIcon className="serach_icon"></SearchIcon>
          <input value={serachText} onChange={(e)=>setserachText(e.target.value)}></input>
          <input onClick={search} hidden type="submit"></input>
          <MicIcon></MicIcon>
          
          </form>
        </div>
    )
}

export default Search
