import Link from "next/link";


export default async function EditProject() {
  //get project by pid
    return (
      <>
        <Link href="/admin">Volver</Link>
        
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
      </>
    )
  }
  