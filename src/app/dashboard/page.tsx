import ProjectList from "@/components/admin/ProjectList";
import Link from "next/link";


export default async function dashboard() {
  
    return (
      <>
        <Link href="/dashboard/new">new project button</Link>
        <ProjectList />
      </>
    )
  }
  