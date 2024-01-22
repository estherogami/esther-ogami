import Image from 'next/image';
import { DiHtml5, DiCss3, DiJavascript1, DiPhp, DiWordpress, DiMongodb, DiGit, DiPhotoshop, DiIllustrator } from "react-icons/di";
import styles from "./Skills.module.scss";
import useFadeInHook from '../../hooks/useFadeInHook';
import LangContext from "../../store/langContext";
import { useContext } from "react";
import { ISubLanguage } from '../../models/common_types';
// @ts-ignore
import parse from 'html-react-parser';

const Skills = () => {
    const { language, langSelector } = useContext(LangContext);
    const devText: ISubLanguage = {
        en: "<h4>Front end Web Development</h4><p>My experience spans from creating <strong>static websites</strong> to <strong>full-stack web applications</strong>. I also have extensive expertise in implementing <strong>Content Management Systems</strong> (CMS) and e-commerce platforms, with a particular focus on proficiency in WordPress. </p>",
        jp: "<h4>フロントエンドウェブ開発</h4><p>私の経験は、<strong>静的ウェブサイト</strong>から<strong>フルスタックウェブアプリケーション</strong>の作成に及びます。また、<strong>コンテンツ管理システム</strong>（CMS）およびeコマースプラットフォームの実装において幅広い専門知識を持っており、特にWordPressにおける熟練度に焦点を当てています。</p>"
    }
    const desText: ISubLanguage = {
        en: " <h4>Graphic Design</h4> <p>While my primary focus is web development, my experience extends to the field of graphic design. I possess the ability to design and create and prorotype user interfaces  and I occasionally undertake branding projects. <br />I have proficiency in <strong>Adobe Photoshop</strong>, <strong>Adobe Illustrator</strong>, and <strong>Adobe XD</strong> as my design tools.</p>",
        jp: "<h4>グラフィックデザイン</h4><p>私の主な焦点はウェブ開発ですが、経験はグラフィックデザインの分野にも広がっています。ユーザーインターフェースのデザインと作成、および時折ブランディングプロジェクトにも着手します。<br />デザインツールとして、<strong>Adobe Photoshop</strong>、<strong>Adobe Illustrator</strong>、および<strong>Adobe XD</strong>に精通しています。</p>"
    }
    const { ref, isVisible } = useFadeInHook({ threshold: 0.2 });

    return (
        <div id="service">
            <h3><Image 
                    src="/assets/img/titles/Skills.svg"
                    height={70} 
                    width={300} 
                    alt="Skills" 
                    loading="lazy"
                    className={`${styles.Title} ${"DefaultState"} ${isVisible ? "FadeIn" : ''}`} ref={ref} /></h3>
                <div className={`${styles.SkillsContainer} ${"DefaultState"} ${isVisible ? "FadeIn" : ''}`} ref={ref}>
                    <div className={styles.TextBox1}>
                        {parse(langSelector(language, devText))}
                        <div className={styles.Tools}>
                            <h5>My magical tools</h5>
                            <ul>
                                <li><span><DiHtml5 /></span> <strong>HTML5</strong></li>
                                <li><span><DiCss3 /></span> <strong>CSS3</strong> (SASS, Tailwind, Bootstrap)</li>
                                <li><span><DiJavascript1 /></span> <strong>Javascript ES6+</strong> (React, Next.js, Typescript, Node.js, JQuery)</li>
                                <li><span><DiPhp /></span> <strong>PHP</strong></li>
                                <li><span><DiWordpress /></span> <strong>CMS</strong> (Wordpress, Woocommerce, Shopify)</li>
                                <li><span><DiMongodb /></span> <strong>Databases</strong> (SQL, MongoDB)</li>
                                <li><span><DiGit /></span> <strong>Git</strong></li>
                            </ul>
                        </div>
                        </div>
                        <div className={styles.TextBox2}>
                            {parse(langSelector(language, desText))}
                            <ul>
                                <li><span><DiPhotoshop /></span></li>
                                <li><span><DiIllustrator /></span></li>
                            </ul>
                    </div>
                </div>
        </div>
    );
}

export default Skills;