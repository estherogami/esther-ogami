import Image from 'next/image';

import WorksListItem from './WorksListItem';
import { IProject } from "../../models/project/types";

import styles from "./Works.module.scss";

interface IWorksListProps {
    data: IProject[];
  }

const Works = ({ data }: IWorksListProps) => {
    return (
        
        <section id="works" className={styles.Works}>
            <div className="container">
                <h2>
                <Image 
                    src="/assets/img/titles/Work.svg"
                    height={150} 
                    width={500} 
                    alt="Works" 
                    loading="lazy"
                     />
                </h2>

                <ul className={styles.WorksList}>
                    { data.map( (project, index) => <WorksListItem key={project._id} data={project} />)} 
                </ul>
            </div>
        </section>
    );
}

export default Works;