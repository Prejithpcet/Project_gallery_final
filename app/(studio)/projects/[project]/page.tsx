import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { Rate } from "antd";
import { Textarea } from "@nextui-org/input";

type Props = {
  params: { project: string };
};

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);
  return (
    <div className="max-w-3xl mx-auto py-20">
      <header className="flex justify-between items-center">
        <h1 className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-5xl font-extrabold pb-2">
          {project.name}
        </h1>
        <a
          className="bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-pink-500 hover:text-pink-100 transition border-2 border-pink-300"
          href={project.url}
          title="View Project"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
      </header>
      <div className="text-lg text-gray-700 mt-5">
        <PortableText value={project.content} />
      </div>
      <Image
        src={project.image}
        alt={project.name}
        width={1920}
        height={820}
        className="mt-10 border-2 border-gray-700 object-cover rounded-xl w-full h-[500px]"
      />
      <div className="flex py-20 pt-40">
        <div className="w-1/2">
          <span className="text-3xl text-gray-500">Comment your reviews</span>
          <div className="w-80 bg-white px-4 py-2 rounded-xl border-2 border-gray-300 mt-8">
            <Textarea
              placeholder="Enter your description"
              className="max-w-xs text-gray-700 text-sm border-none"
            />
          </div>
        </div>
        <div className="flex flex-col items-start flex-1 justify-center">
          <Rate allowHalf defaultValue={2.5} />
        </div>
      </div>
    </div>
  );
}
