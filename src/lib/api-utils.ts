import { IProject } from "../models/project/types";


//Default data response function
async function getData(request: string){
    const response = await fetch(request);
    const data = await  response.json();   
    return data;
}


//Get all Projects
export async function getAllProjects(){ 
    
    return getData(process.env.NEXT_PUBLIC_API_URL+"api/projects");
}

//Get project by id
export async function getProjectBySlug(slug: string){
    const projects = await getData(process.env.NEXT_PUBLIC_API_URL+"api/projects");
    const project: IProject = projects.data.find( (p: IProject) => p.slug.toString() === slug );
    return project;
}


//Get Profile
export async function getProfile(){
    return  getData(process.env.NEXT_PUBLIC_API_URL+"api/profile");
}