import { IProject } from "../models/project/types";
export const BASE_API_URL = process.env.API_URL;



//Default data fetch response function
async function getData(request: string){
    try {
      const res = await fetch(request, {
        next: { revalidate: 60 } 
    
      });
  
      if (!res.ok) {
        throw new Error("Failed to fetch");
      }
  
      return res.json();
    } catch (error) {
      console.log("Error loading: ", error);
    }
}

//Get all Projects
export const getAllProjects = async () => {
      return getData(`${BASE_API_URL}/api/projects`);
  };
  

//Get project by id
export async function getProjectBySlug(slug: string){
    const { projects } = await getData(`${BASE_API_URL}/api/projects`);
    const project: IProject = projects.find( (p: IProject) => p.slug.toString() === slug );
    return project;
}


//Get Profile
export async function getProfile(){
  return getData(`${BASE_API_URL}/api/profile`);
}