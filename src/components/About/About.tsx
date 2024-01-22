import Image from 'next/image';
import { IProfile } from '../../models/profile/types';
import LangContext from "../../store/langContext";
import { useContext } from "react";
import { ISubLanguage } from '../../models/common_types';
import useFadeInHook from '../../hooks/useFadeInHook';
import styles from "./About.module.scss";

import  Resume  from "./Resume";
// @ts-ignore
import parse from 'html-react-parser';
import Skills from './Skills';

interface IProfileProps {
    data: IProfile[];
}

const About = ({data}: IProfileProps) => {
    const { language, langSelector } = useContext(LangContext);
    const resumeText: ISubLanguage = {
        en: "<p>I'm a front-end web developer with over 8 years of experience crafting digital experiences. I consider my profile to be diverse, as I possess a strong foundation in programming coupled with a keen eye for design.</p><p>After spending several years working as a web developer in Spain, I embarked on a new adventure in Japan. There, I continued my work in a completely new environment full of challenges. More recently, my journey led me to Brazil, where I had the opportunity to develop my creative side as an amateur musician(percussionist and flutist), participating in numerous concerts while working remotely for Japan.</p><p>This diversity of environments has enriched my perspective and ability to tackle challenges. In addition to my professional experience, I am fluent in four languages, allowing me to communicate effectively in international settings and collaborate with diverse teams.</p>",
        jp: "<p>私は、8年以上の経験を持つフロントエンドのウェブ開発者です。デジタルな体験を構築することにおいて幅広い経験を持っています。プログラミングの堅実な基礎とデザインへの鋭い感覚を兼ね備えた多様なプロフィールを持っています。</p><p>スペインでウェブ開発者として数年間働いた後、私は日本で新たな冒険に乗り出しました。そこで、新しい環境に満ちたチャレンジに満ちた仕事を続けました。最近では、私の旅はブラジルに導かれ、アマチュアのミュージシャン（パーカッショニストおよびフルート奏者）として創造的な側面を発展させ、様々なコンサートに参加する一方で、日本向けにリモートワークを行っています。</p><p>これらの異なる環境は私の視点とチャレンジに対処する能力を豊かにしました。専門的な経験に加えて、私は4つの言語を流暢に操ることができ、国際的な状況で効果的にコミュニケーションをとり、多様なチームと協力することができます。</p>"
    }
    //Animaciones
    const { ref, isVisible } = useFadeInHook({ threshold: 0.2 });

    return (
       <section className="about" id="about">
            <div className={styles.SectionWrap}>
                <div className={styles.container}>
                    <h2 className={`${"DefaultState"} ${isVisible ? "FadeIn" : ''}`} ref={ref}><Image 
                        src="/assets/img/titles/About.svg"
                        height={150} 
                        width={500} 
                        alt="About" 
                        loading="lazy" 
                        /></h2>
                    <div className={`${styles.TextBox} ${"DefaultState"} ${isVisible ? "FadeIn" : ''}`} ref={ref}>
                        <div className={styles.intro}>
                            <h3>Esther Ogami</h3>
                            {parse(langSelector(language, resumeText))}
                        </div>
                        <div className={styles.resume}>
                        <h4>RESUME</h4>
                        { /* @ts-ignore */ }
                        <Resume resumeData={data[0].work_experience} />
                        </div>
                    </div>
                    <Skills />
                </div>
            </div>
       </section>
    );
}

export default About;




//esp
{/* <p>¡Hola! Soy Esther, desarrolladora web front-end con más de 8 años de experiencia en la creación de experiencias digitales. 
                            Mi perfil lo considero mixto ya que tengo una sólida base en programación y un fuerte sentido para el diseño.
                        </p>
                        <p>
                            Después de varios años trabajando como desarrollador web en España. Pasado un tiempo decidí iniciar en una aventura en Tokio donde continué mi labor en un entorno completamente nuevo lleno de retos.
                            Más recientemente, mi trayectoria me llevó a Brasil donde tuve la oportunidad de desarrollar mi faceta creativa como percusionista y flautista dando numerosos conciertos.
                        </p>
                        <p>
                            Esta diversidad de entornos ha enriquecido mi perspectiva y capacidad para abordar desafíos.
                            Además de mi experiencia profesional, hablo con fluidez cuatro idiomas, lo que me ha permitido comunicarme efectivamente en entornos internacionales y colaborar con equipos diversos.
                        </p> */}