import Image from 'next/image';
import { getAllProjects, BASE_API_URL } from '@/lib/api-utils';
import WorksListItem from './WorksListItem';

import { IProject } from "../../models/project/types";

import styles from "./Works.module.scss";

  

export default async function Works ()  {
    if (!BASE_API_URL) { 
        return null
    }
    const { projects } = await getAllProjects() as { projects: IProject[] };
  
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
                    { projects.map( (project, index) => <WorksListItem key={project._id} data={project} />)} 
                </ul>  
            </div>
        </section>
    );
}
