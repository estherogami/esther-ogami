import { Fragment, useContext } from "react";
import { useRouter } from "next/router";
import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';

import LangContext from "../../store/langContext";
import { getAllProjects, getProjectBySlug } from "../../lib/api-utils";

import Project from "../../components/Project/Project";
import Modal from "../../components/ui/Modal/Modal";
import { IProject } from "../../models/project/types";

interface IProjectPage {
    project: IProject;
    revalidate: number;
}


const ProjectPage = ({project}: IProjectPage) => {
    const router = useRouter();
    const { language, langSelector } = useContext(LangContext);
    
    return (
        <Fragment>
            {<Head>
                <title>{langSelector(language, project.title)}</title>
                <meta name="description" content={project.customer} />
            </Head> }
            <Modal>
                <Project data={project}/>
            </Modal>
        </Fragment>
    );
}

export const getStaticProps: GetStaticProps = async (context) => {
    const { pid } = context.params!;
    const projectData = await getProjectBySlug(pid!.toString());

    if (!projectData) {
        return {
        notFound: true,
        }
    }
    
    const props: IProjectPage = { 
        project: projectData,
        revalidate: 5000  //604800 una semana
    } 
    return { props }
}


//Router
export const getStaticPaths: GetStaticPaths = async () => {
    const projectsData = await getAllProjects();
    const slugs = projectsData.data.map((p: IProject) => p.slug.toString());
    const pathsWithParams = slugs.map( (s: string) => ({ params: { pid: s } }))

    return {
        paths: pathsWithParams,
        fallback: false
    }
}


export default ProjectPage;