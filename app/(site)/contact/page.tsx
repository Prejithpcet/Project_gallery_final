import React from "react";
import { Textarea } from "@nextui-org/input";
import Image from "next/image";
const page = () => {
  return (
    <>
      <section>
        <div className="max-w-5xl flex mx-auto py-20">
          <div className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 flex w-full rounded-xl shadow-2xl">
            <div className="w-1/2 pl-16 py-10 pb-16">
              <span className="text-4xl text-white font-bold w-fit">
                Get In Touch
              </span>
              <p className="text-white">Contact me related to any queries</p>
              <div className="flex flex-col gap-6 pt-10">
                <div className="w-80 bg-white px-4 py-2 rounded-xl">
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="text-gray-700 text-sm"
                  />
                </div>
                <div className="w-80 bg-white px-4 py-2 rounded-xl">
                  <input
                    type="text "
                    placeholder="Enter your email"
                    className="text-gray-700 text-sm"
                  />
                </div>
                <div className="w-80 bg-white px-4 py-2 rounded-xl">
                  <Textarea
                    placeholder="Enter your description"
                    className="max-w-xs text-gray-700 text-sm border-none"
                  />
                </div>
                <div>
                  <button className="w-80 text-gray-700 font-semibold bg-white px-4 py-2 rounded-xl hover:bg-slate-200 hover:scale-105 transition">
                    Submit
                  </button>
                </div>
              </div>
            </div>
            <div className="flex-1 bg-white rounded-xl overflow-hidden pt-8">
              <Image src="/Simple.png" alt="Sign In" width={660} height={660} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
