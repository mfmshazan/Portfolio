"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"

const info = [
  {
    icon: <FaPhoneAlt className="text-emerald-500" />,
    title: "Phone",
    description: "+123 456 7890"
  },
  {
    icon: <FaEnvelope className="text-emerald-500" />,
    title: "Email",
    description: "shazan@gmail.com"
  },
  {
    icon: <FaMapMarkerAlt className="text-emerald-500" />,
    title: "Address",
    description: "123 Street, City, Country"
  }
]

const Contact = () => {
  return (
    <div className="min-h-[80vh] bg-[#0a0f1c] text-white px-6 py-10 flex items-center justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* Left Side - Info */}
        <div>
          <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
          <p className="text-gray-400 mb-10">
            Feel free to reach out for collaborations or just a friendly hello 👋
          </p>

          <div className="space-y-8">
            {info.map((item, index) => (
              <div key={index} className="flex items-center gap-6">
                <div className="text-2xl">{item.icon}</div>
                <div>
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="bg-[#162032] p-8 rounded-2xl shadow-lg ">
          <form className="space-y-6">
            <Input
              type="text"
              placeholder="Name"
              className="bg-[#0d1525] border border-transparent focus:border-emerald-500 text-white placeholder-gray-400"
            />
            <Input
              type="email"
              placeholder="Email"
              className="bg-[#0d1525] border border-transparent focus:border-emerald-500 text-white placeholder-gray-400"
            />
            <Input
              type="text"
              placeholder="Subject"
              className="bg-[#0d1525] border border-transparent focus:border-emerald-500 text-white placeholder-gray-400"
            />
            <Textarea
              placeholder="Message"
              className="bg-[#0d1525] border border-transparent focus:border-emerald-500 text-white placeholder-gray-400 h-32"
            />
            <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-full">
              Send Message
            </Button>
          </form>
        </div>



      </div>
    </div>
  )
}

export default Contact
