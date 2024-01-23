"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useContext } from "react";
import LangContext from "../../store/langContext";
import useFadeInHook from '../../hooks/useFadeInHook';

import { IProject } from "../../models/project/types";
import style from "./WorksListItem.module.scss";

interface IWorkItemProps {
    data: IProject;
  }

const WorksListItem = ({ data }: IWorkItemProps) => {
    const { language, langSelector } = useContext(LangContext);
    const { title, featured_picture, category, slug } = data;
    const picture = "/assets/img/projects"+featured_picture[0].src;
    const display_title = langSelector(language, title);
    //Animaciones
    const { ref, isVisible } = useFadeInHook({ threshold: 0.8 });
    

    return (
        <li className={`${style.WorkItem} ${isVisible ? style.FadeIn : ''}`} ref={ref}>
            <Link  href={"/project/"+slug}>
                <div className={style.Titles}>
                    <h2>{display_title}</h2>
                    <span>_{category}</span>
                </div>
                <div className={style.Picture}  >
                <Image
                    src={picture}
                    width={featured_picture[0].width}
                    height={featured_picture[0].height}
                    alt="test"
                    loading="lazy"
                />
                </div>
            </Link>
        </li>
    );
}

export default WorksListItem;