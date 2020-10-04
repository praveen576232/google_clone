import React, { useState, useEffect } from "react";
import "./MainBody.css";
import {useStateValue} from './Stateprovider';
import { Button } from "@material-ui/core";
import languageText from "./language";
import {useHistory} from 'react-router-dom'
import Search from "./Search";
function MainBody({setText,text,setserachText,serachText}) {
  const history = useHistory();
    const [selectedLangCode, setSelectedLangCode] = useState(0);
  const [previceLang, setPrevicelang] = useState(null);
  const [ {},dispath] = useStateValue();
  const [lang, setLang] = useState([
    { langcode: 1, name: "हिन्दी" },
    { langcode: 2, name: "বাংলা" },
    { langcode: 3, name: "తెలుగు" },
    { langcode: 4, name: "मराठी" },
    { langcode: 5, name: "தமிழ்" },
    { langcode: 6, name: "ગુજરાતી" },
    { langcode: 7, name: "ಕನ್ನಡ" },
    { langcode: 8, name: "മലയാളം" },
    { langcode: 9, name: "ਪੰਜਾਬੀ" },
  ]);

  useEffect(() => {
   
   const selectedLanguageText =()=>{   switch (selectedLangCode) {
     
        case 0:
          setText(languageText.English);
         
          break;
        case 1:
          setText(languageText.Hindi);
          
          break;
        case 2:
          setText(languageText.Bangla);
          break;
        case 3:
          setText(languageText.Telugu);
          break;
        case 4:
          setText(languageText.Marate);
          break;
        case 5:
          setText(languageText.Tamil);
          break;
        case 6:
          setText(languageText.Gujarathi);
          break;
        case 7:
          setText(languageText.Kannada);
          break;
        case 8:
          setText(languageText.Malayalam);
          break;
        case 9:
          setText(languageText.Punjabi);
          break;
        default:
          setText(languageText.English);
          break;
   }
    }
    return selectedLanguageText();
  }, [selectedLangCode]);
  const setlanguage = (language) => {
    setSelectedLangCode(language.langcode);
    if (previceLang === null) {
      let tempLang = lang;
      setPrevicelang(language);

      tempLang = tempLang.filter((lang) => lang.langcode !== language.langcode);

      tempLang.unshift({ langcode: 0, name: "English" });
      setLang(tempLang);
    } else if (previceLang.langcode !== language.langcode) {
      if (language.name === "English") {
        let tempLang = lang;

        tempLang.shift();
        tempLang.splice(previceLang.langcode - 1, 0, previceLang);
        setPrevicelang(null);
        setSelectedLangCode(0);
      } else {
        setSelectedLangCode(language.langcode);
        let tempLang = lang;

        tempLang.splice(previceLang.langcode, 0, previceLang);
        tempLang = tempLang.filter((lan) => lan.langcode !== language.langcode);

        setPrevicelang(language);
        setLang(tempLang);
      }
    }

   
  };
  const search =(e) =>{
    e.preventDefault();
    // dispath({
    //   type:'SAVE_TERM',
    //   term:serachText
    // })
    // history.push("serach");
  }
  return (
    <div className="mainbody">
      <div className="mainbody__items">
        <img
          alt="google logo"
          src="https://techcrunch.com/wp-content/uploads/2015/10/screen-shot-2015-10-08-at-4-20-16-pm.png?w=730&crop=1"
        ></img>
        {/* <div className="mainbody__serach"> */}
          <Search serachText={serachText} setserachText={setserachText} />
          {/* </div> */}
        <div className="mainbody_buttons">
          <Button variant="outlined" onClick={search}>Google Search</Button>
          <Button variant="outlined">{text.button_name}</Button>
        </div>
        <div className="mainbody_lang">
          <div className="mainbody_google_lang_offered">
  <p>{text.google_offered}</p>
          </div>
          <div className="mainbody_lang_link">
            {lang.map((lan) => (
              <p onClick={() => setlanguage(lan)} key={lan.langcode}>
                {lan.name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainBody;
