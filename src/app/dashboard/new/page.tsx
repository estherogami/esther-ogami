

import NewProjectForm from "@/components/admin/NewProjectForm";
import Link from "next/link";



export default async function NewProject() {
 

    return (
      <>
        <Link href="/dashboard">Volver</Link>
        edit project info

        project slug
        project title en/jp 
        customer
        category (select)
        featured image (loop)
          -src
          -width
          -height
          -alt
        description en/jp
        link
        <NewProjectForm />
      </>
    )
  }
  