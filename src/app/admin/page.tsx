import ProjectList from "@/components/admin/ProjectList";
import Link from "next/link";


export default async function Admin() {
  
    return (
      <>
        <Link href="/admin/new">new project button</Link>
        <ProjectList />
      </>
    )
  }
  