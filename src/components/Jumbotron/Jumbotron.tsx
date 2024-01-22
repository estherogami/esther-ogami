
import Image from 'next/image';
import LangContext from "../../store/langContext";
import { useContext } from "react";
import { ISubLanguage } from '../../models/common_types';
import styles from "./Jumbotron.module.scss";
// @ts-ignore
import parse from 'html-react-parser';


const Jumbotron = () => {
    const { language, langSelector } = useContext(LangContext);
    const introText:ISubLanguage = {
        en: "My name is Esther Ogami<br /> and Im a web developer & designer<br /> based in Tokyo.",
        jp: "大上・エステルです。<br />東京を拠点にしたウェブデベロッパー<br />およびデザイナーです。"
    }
    return (
        <section id="top" className={styles.Jumbotron}>
            <div className="container">
                <Image 
                src="/assets/img/titles/Hello.svg"
                height={150} 
                width={500} 
                alt="Hello!" 
                loading="lazy" />
                <h1>
                {parse(langSelector(language, introText))}
                </h1>
            </div>
        </section>
    );
}

export default Jumbotron;