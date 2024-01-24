"use client"
import { useContext, Suspense } from "react"
import { ImSpinner } from "react-icons/im";
import Image from 'next/image';

import LangContext from "../../store/langContext";
import Button from "../ui/Button/Button";
import { IProject } from "../../models/project/types";
// @ts-ignore
import parse from 'html-react-parser';

import styles from "./Project.module.scss";

interface IProjectProps {
    data: IProject;
  }

const Project = ({ data }: IProjectProps) => {
    const {category,  description, title, featured_picture } = data;
    const { language, langSelector } = useContext(LangContext);

    return (
        <>
            <div className={styles.ProjectContainer}>
                <div className={styles.Project}>
                    <div>
                     <div className={styles.ProjectInfo} >
                        <h1><Image 
                            src="/assets/img/titles/Project.svg"
                            height={150} 
                            width={500} 
                            alt="Project" 
                            loading="lazy" /></h1>
                        <h2>{langSelector(language, title)}</h2>
                        <article>
                            <p>{category}</p>
                            {parse(langSelector(language, description))}
                            
                            {data.link !== "" ? <Button link={data.link as string}>Link to project</Button>: null}
                        </article>
                    </div>
                    </div>
                     <div className={styles.Gallery}>
                        <ul>
                       
                        {featured_picture.map((image, i) => (
                            i> 0 ? <li key={i} >
                                <Suspense fallback={<ImSpinner />}>
                                    <Image 
                                    src={"/assets/img/projects"+image.src}
                                    width={image.width}
                                    height={image.height}
                                    alt={image.alt} 
                                    loading="lazy" />
                                </Suspense>
                            </li>: null))}
                        </ul>
                    </div> 
                </div>
            </div>            
        </>
    );
}

export default Project;