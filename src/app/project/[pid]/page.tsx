
import { Metadata } from 'next'
import {  BASE_API_URL, getProjectBySlug } from "../../../lib/api-utils";
import { useParams } from 'next/navigation';

import Project from "../../../components/Project/Project";
import Modal from "../../../components/ui/Modal/Modal";

export const metadata: Metadata = {
    title: 'Project',
  }
  

export default async function ProjectPage ({ params }: { params: { pid: string }})  {
    if (!BASE_API_URL) { 
        return null
    }
    const project  = await getProjectBySlug(params.pid);
   
    return (
        <>
            <Modal>
                <Project data={project}/>
            </Modal>  
        </>
    );
}


