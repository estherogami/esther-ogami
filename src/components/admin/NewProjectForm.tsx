"use client";
import { useForm } from "react-hook-form";
import { IProject } from "@/models/project/types";
import { useRouter } from "next/navigation";

const NewProjectForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // Crear proyecto
    const newProject: IProject = {
      slug: data.slug,
      title: {
        en: data.titleen,
        jp: data.titlejp,
      },
      category: "web",
      customer: "-",
      description: {
        en: "test",
        jp: "test",
      },
      thumb_width: 800,
      thumb_height: 800,
      featured_picture: [
        {
          src: "test",
          width: 0,
          height: 0,
          alt: "test",
        },
      ],
      link: "test",
    };

    try {
      // Enviar proyecto a la API
      const res = await fetch("http://localhost:3000/api/projects", {
        method: "POST",
        body: JSON.stringify(newProject),
        headers: {
          "Content-Type": "application/json",
        },
      });
      router.push("/admin/");

    } catch (error) {
      console.error("Error submitting project:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Title English</label>
        <input {...register("titleen")} />
        <label>Title JP</label>
        <input {...register("titlejp")} />
        <label>Slug</label>
        <input {...register("slug")} />
        <input type="submit" />
      </form>
    </div>
  );
};

export default NewProjectForm;
