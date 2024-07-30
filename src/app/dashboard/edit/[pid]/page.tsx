import NewProjectForm from "@/components/admin/NewProjectForm";
import Link from "next/link";


export default async function EditProject({ params }: { params: { pid: string }}) {
    console.log(params.pid);
    return (
      <>
        <Link href="/admin">Volver</Link>
        <button>Borrar proyecto</button>
        <NewProjectForm method={"PUT"} />
      </>
    )
  }
  