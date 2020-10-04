import React, { useState } from 'react';

import './App.css';
import Header from './Header';
import MainBody from './MainBody';
import languageText from "./language";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import SerachResultPage from './SerachResultPage';
function App() {
  const [text, setText] = useState(languageText.English);
  const [serachText,setserachText]=useState("")
  return (
   <Router>
      <Switch>
     <Route path="/serach">
         <SerachResultPage setserachText={setserachText} serachText={serachText}></SerachResultPage>
     </Route>
     <Route path="/">
     <div className="App">
     <Header text={text}></Header>
     <MainBody setText={setText} text={text} setserachText={setserachText} serachText={serachText}></MainBody>
    </div>
     </Route>
   </Switch>
   </Router>
  );
}

export default App;
