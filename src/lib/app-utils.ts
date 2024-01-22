import axios from "axios";
import {ISubLanguage } from "../models/common_types";


//Language selector 
//gets the language and the object with the language strings and returns the one in the selected language)
//*in this case I only have 2 options so I keep it simple
export const languageSelector = (language: String, stringObj:ISubLanguage) => {
    return (language == "en") ? stringObj.en : stringObj.jp;
}