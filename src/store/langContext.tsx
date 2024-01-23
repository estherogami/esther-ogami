"use client"
import { createContext, useState, ReactNode, useEffect } from 'react';
import { ISubLanguage } from '../models/common_types';


interface LangContextProviderProps {
    children: ReactNode;
  }
type typeLan = "EN" | "JP";

export type Langs = {
  language: typeLan;
  langHandler: (l: typeLan) => void;
  langSelector: (l: typeLan, stringObj:ISubLanguage) => string;
}

const LangContext = createContext<Langs>({
  //Default values
  language: "EN",
  langHandler: (l: typeLan) => {},
  langSelector: (l: typeLan, stringObj:ISubLanguage) => {
    return (l === "EN") ? stringObj.en : stringObj.jp;
  }
});

export function LangContextProvider(props: LangContextProviderProps) {
  const [language, setLanguage] = useState<typeLan>("EN");
  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
        const defaultLang= localStorage.getItem('language');
        /* @ts-ignore */
        defaultLang ? setLanguage(defaultLang) : setLanguage("EN");
    }
  }, []);

  //Language switch
  const langHandler: Langs['langHandler'] = (l) => {
    localStorage.setItem("language", l)
    setLanguage(l);
  }

    //Language selector 
    //gets the language and the object with the language strings and returns the one in the selected language)
    //*in this case I only have 2 options so I keep it simple
    const languageSelector = (language: typeLan, stringObj:ISubLanguage) => {
        return (language === "EN") ? stringObj.en : stringObj.jp;
    }

  const context: Langs = {
    language,
    langHandler,
    langSelector: languageSelector
  };

  return <LangContext.Provider value={context}>{props.children}</LangContext.Provider>;
}

export default LangContext;