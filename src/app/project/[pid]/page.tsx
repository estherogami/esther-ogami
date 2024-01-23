
import { Metadata } from 'next'
import {  getProjectBySlug } from "../../../lib/api-utils";
import { useParams } from 'next/navigation';

import Project from "../../../components/Project/Project";
import Modal from "../../../components/ui/Modal/Modal";

export const metadata: Metadata = {
    title: 'Project',
  }
  
export default async function ProjectPage ({ params }: any)  {
    const project  = await getProjectBySlug(params.pid);
   
    return (
        <>
            <Modal>
                <Project data={project}/>
            </Modal>  
        </>
    );
}


