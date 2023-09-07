import Image from "next/image";
import { getProjects } from "@/sanity/sanity-utils";
import { Project } from "@/types/Project";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();
  //console.log(projects);

  return (
    <>
      <div className="max-w-5xl mx-auto py-20">
        <h1 className="text-7xl font-extrabold ">
          Hello, I&apos;m{" "}
          <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
            Prejith
          </span>{" "}
          !
        </h1>
        <p className="mt-3 text-xl text-gray-600">
          Come checkout my latest projects😀
        </p>
        <h2 className="font-bold mt-24 text-gray-700 text-3xl">My Projects</h2>

        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project: Project) => (
            <div
              key={project._id}
              className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-blue-400 transition"
            >
              <Link href={`/projects/${project.slug}`}>
                <Image
                  src={project.image}
                  alt={project.name}
                  width={750}
                  height={300}
                  className="obkect-contain w-full h-[200px] rounded-lg border-gray-500"
                />
                <div>
                  <span className="mt-2 text-xl font-semibold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
                    {project.name}
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
