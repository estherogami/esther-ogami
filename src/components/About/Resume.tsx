import { Fragment, useContext } from "react";
import {IWorkExperience} from "../../models/profile/types";
import Button from "../ui/Button/Button";
import LangContext from "../../store/langContext";

import styles from "./Resume.module.scss";



interface IResumeProps {
    resumeData: IWorkExperience[];
}

const Resume = ({resumeData}: IResumeProps) => {
    const { language, langSelector } = useContext(LangContext);
    return (
        <Fragment>
            <ul className={styles.resume}>
                { resumeData.map( (item, index) =>  /* @ts-ignore */ 
                    <li key={index}><span>{item.year.toString()}</span> {  langSelector(language, item.experience[0])}</li>)}   
            </ul>

            {/* <Button link="#"> Download resume </Button> */}
       </Fragment>
    );
}

export default Resume;