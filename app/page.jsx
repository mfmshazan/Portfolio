"use client"

import Social from "@/components/Social"
import { Button } from "@/components/ui/button"
import CodeSnippets from "@/components/ui/CodeSnippets"
import { FiDownload } from "react-icons/fi"
import { ReactTyped } from "react-typed"

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left">
            <h1 className="text-[20px] xl:text-[30px] font-extralight leading-[1.5]">
              Hello I'm <br />
              <span className="name font-light tracking-tight">Shazan Faslan</span>
            </h1>
            <div className="text-[20px] xl:text-[40px] font-medium mt-10 text-emerald-500">
              <ReactTyped
                strings={["Frontend Developer", "Backend Developer", "Full Stack Developer"]}
                typeSpeed={50}
                backSpeed={50}
                loop
              />
            </div>
            <div className="max-w-xl mt-6 text-gray-600 font-medium">
              I'm a Fullstack Developer passionate about solving problems and building user-focused digital solutions.
            </div>
            <div className="flex mt-8">
              <div className="flex gap-8 px-1 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:scale-105 transition-transform duration-300">
                <Button variant="outline" className="flex items-center gap-2 text-md ">
                  Download CV
                  <FiDownload className="text-xl" />
                </Button>
              </div>
              <div className="ml-20 mt-3">
                <Social
                  containerStyles="flex gap-14 text-lg border-l border-white/20 pl-16 hover:text-emerald-500"
                  iconStyles="border border-white p-2 rounded-full text-white transition duration-300 hover:text-emerald-500 transition duration-300 hover:border-emerald-500"
                />
              </div>
            </div>
          </div>
          {/* <div><CodeSnippets/></div> */}
        </div>
      </div>

    </section>
  )
}

export default Home

