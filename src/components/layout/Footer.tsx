"use client"
import Image from 'next/image';
import Button from '../ui/Button/Button';

import styles from "./Footer.module.scss";

import LangContext from "../../store/langContext";
import { useContext,  useEffect, useState } from "react";
import { ISubLanguage } from '../../models/common_types';
// @ts-ignore
import parse from 'html-react-parser';

const Footer = () => {
    const { language, langSelector } = useContext(LangContext);
    const [showElement, setShowElement] = useState(false);

    useEffect(() => {
        //Logica para boton scrolltop
        const handleScroll = () => {
          const scrollY = window.scrollY;
          setShowElement(scrollY > 1000);
        };
        // Add scroll event listener when component mounts
        window.addEventListener('scroll', handleScroll);
        
        // Clean listener when unmounts
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
      }, []); 


    //or: Although I’m not currently looking for any new opportunities...
    const footerText: ISubLanguage = {
        en: " I’m  currently looking for new opportunities, my inbox is always open. <br> Whether you have a question or just want to say hi, I’ll try my best to get back to you!",
        jp: "新しいチャンスを探しています。いつでもご連絡お待ちしております。<br>質問があればもちろん、ただ挨拶だけでも大歓迎です。お気軽にお声がけくださいね。"
    }

    return (
        <footer className={styles.Footer} id="contact">
            <div className="container relative">
                    <div className={styles.ContactInfo}>
                        <span className={styles.Subtitle}>Whats next?</span>
                        <h2><Image 
                                    src="/assets/img/titles/Contact.png"
                                    height={100} 
                                    width={900} 
                                    alt="Works" 
                                    loading="lazy" /></h2>
                    
                        <p className={styles.Text}>{parse (langSelector(language, footerText))}</p>
                        <Button link="mailto:estherogami@gmail.com"> Say hello</Button>
                    </div>
                
                    <p className={styles.Thanks}>
                        Thank you for visiting my website.
                    </p>
            </div>
           {showElement && <a href="#top" className={`${styles.ScrollTop} ${styles.visible}`}>TOP</a>}
        </footer>
    );
}

export default Footer;