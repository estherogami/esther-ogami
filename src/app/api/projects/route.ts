import Projects from "../../../models/project/Project";
import { IProject } from "../../../models/project/types";
import connectMongoDB from "@/lib/dbConnect";
import { NextResponse } from "next/server";

interface ProjectsResponse {
  projects: IProject[];
}
export async function GET(): Promise<NextResponse<ProjectsResponse>> {
  await connectMongoDB();
  const projects: IProject[] = await Projects.find();
  const responseData: ProjectsResponse = { projects };
  return NextResponse.json(responseData);
}



