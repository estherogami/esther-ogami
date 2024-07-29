import { getAllProjects, BASE_API_URL } from '@/lib/api-utils';
import { IProject } from "../../models/project/types";
import Link from 'next/link';

export default async function ProjectList () {
    const { projects } = await getAllProjects() as { projects: IProject[] };
    // console.log(projects);
    return (
        <div>
             { projects.map( (project, index) => 
             <li key={project._id}>
                <Link href={"/dashboard/edit/"+project.slug}>{project.title.en} / {project.title.jp} </Link>
             </li>)} 
        </div>
    );
}
