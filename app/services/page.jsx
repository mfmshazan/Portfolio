"use client"

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { number } from "framer-motion";
import { Description } from "@radix-ui/react-dialog";

const sevices = [
  {
    number: "01",
    title: "Web Development",
    Description: "Building responsive and dynamic websites using modern technologies like React, Next.js, and Tailwind CSS.",
    href: ""
  },

  {
    number: "02",
    title: "UI/UX Design",
    Description: "Creating user-friendly interfaces and engaging user experiences with a focus on usability and aesthetics.",
    href: ""
  },

  {
    number: "03",
    title: "Backend Development",
    Description: "Developing robust backend systems and APIs using Node.js, Express, and databases like MongoDB and PostgreSQL.",
    href: ""
  },

  {
    number: " 04",
    title: "Figma to Code",
    Description: "Converting Figma designs into clean, efficient, and responsive code for seamless web",
    href: ""
  }
]

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0}}
          animate={{
            opacity: 1,
            transition: { duration: 0.5, delay: 0.3, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16"
        >
          {sevices.map((service, index) => {
            return(
              <div key={index} >
                <div>
                  <div>{service.number}</div>
                  <Link href={service.href}>afad</Link>
                </div>
                <h2 className="font-bold">{service.title}</h2>
                <p>{service.Description}</p>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
