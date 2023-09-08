import Image from "next/image";
import React from "react";
import skills from "@/components/Skills";
import { Steps } from "antd";

const About = () => {
  const description = "This is a description.";
  return (
    <>
      <section>
        <div className="max-w-5xl flex mx-auto py-20">
          <div className="w-1/2">
            <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-7xl font-bold">
              Prejith P
            </span>
            <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 text-transparent">
              MERN Stack Developer
            </span>
            <div className="flex flex-col relative">
              <span className="font-semibold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 text-white absolute top-0 w-fit px-4 py-2 rounded-lg mt-10">
                Full Stack MERN developer
              </span>
              <span className="font-semibold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 text-white absolute top-24 w-fit px-4 py-2 rounded-lg mt-1">
                UI/UX Developer
              </span>
              <span className="font-semibold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 text-white absolute top-40 w-fit px-4 py-2 rounded-lg ">
                Blockchain Enthusiast
              </span>
            </div>
          </div>
          <div className="flex-1">
            <Image
              src="/Image1.png"
              alt="Prejith P"
              width={760}
              height={620}
              className="rounded-lg scale-125"
            />
          </div>
        </div>
        <div className="max-w-5xl flex mx-auto py-20 gap-8 justify-center">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-transparent w-[60px] h-[60px] rounded-full flex justify-center items-center border-2 border-indigo-500/50 hover:bottom-3 hover:border-indigo-500/50 hover:scale-110 transition shadow-"
            >
              <Image
                src={skill.imgUrl}
                alt="img"
                width={50}
                height={50}
                className="rounded-full object-cover hover:scale-110 transition"
              />
            </div>
          ))}
        </div>
        <div className="max-w-5xl flex mx-auto py-40 gap-8 justify-center">
          <div className="w-1/2 pt-10">
            <Image
              src="/Prejith P.jpg"
              alt="Prejith"
              width={300}
              height={500}
              className="rounded-xl bg-gray-500 shadow-xl shadow-gray-500/50"
            />
          </div>
          <div className="flex flex-col flex-1 scale-125 pt-20">
            <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-3xl font-bold pb-8">
              Education
            </span>
            <Steps
              direction="vertical"
              size="small"
              current={2}
              items={[
                { title: "Class 10 (2017) ", description: "CGPA 10/10" },
                {
                  title: "Class 12 (2019)",
                  description: "Percentage 95/100",
                },
                {
                  title:
                    "B Tech in Computer Science at College of Engineering Trivandrum",
                  description: "Current CGPA 9.04/10",
                },
              ]}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
