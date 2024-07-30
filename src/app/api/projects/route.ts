import Projects from "../../../models/project/Project";
import { IProject } from "../../../models/project/types";
import connectMongoDB from "@/lib/dbConnect";
import { NextResponse } from "next/server";

interface ProjectsResponse {
  projects: IProject[];
}

// Handler para obtener los proyectos
export async function GET(): Promise<NextResponse<ProjectsResponse>> {
  await connectMongoDB();
  const projects: IProject[] = await Projects.find();
  const responseData: ProjectsResponse = { projects };
  return NextResponse.json(responseData);
}

// Handler para crear un nuevo proyecto
export async function POST(req: Request): Promise<NextResponse> {
  await connectMongoDB();
  try {
    const data = await req.json();

    const newProject = new Projects(data);
    await newProject.save();

    return NextResponse.json(newProject, { status: 201 });
  } catch (error) {
    console.error('Error creating project:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

//Handler para editar un proyecto