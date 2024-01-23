import { NextResponse } from "next/server";
import connectMongoDB from "@/lib/dbConnect";

import Profile from "../../../models/profile/Profile";
import { IProfile } from "../../../models/profile/types";


// Agregar definición de tipo para el resultado de la consulta
interface ProfileResponse {
  profile: IProfile[];
}
export async function GET(): Promise<NextResponse<ProfileResponse>> {
  await connectMongoDB();
  const profile: IProfile[] = await Profile.find();
  const responseData: ProfileResponse = { profile };
  return NextResponse.json(responseData);
}



