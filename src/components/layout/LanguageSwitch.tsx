"use client"

import { useContext } from "react";
import LangContext from "../../store/langContext";
import styles from "./LanguageSwitch.module.scss";

const LanguageSwitch = () => {
    const { language, langHandler } = useContext(LangContext);
    return (
        <div className={styles.switchButtons}>
            <button 
                onClick={() => langHandler("EN")}
                className={language === "EN" ? styles.selected : ""}>EN</button> 
            <span>|</span> 
            <button 
                onClick={()=>langHandler("JP")}
                className={language === "JP" ? styles.selected : ""}>JP</button>
        </div>
    );
}

export default LanguageSwitch;