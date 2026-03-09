"use client"

import { useState } from "react"
import emailjs from "@emailjs/browser"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"

const info = [
  {
    icon: <FaPhoneAlt className="text-emerald-500" />,
    title: "Phone",
    description: "+94 769157565"
  },
  {
    icon: <FaEnvelope className="text-emerald-500" />,
    title: "Email",
    description: "faslanshazan23@gmail.com"
  },
  {
    icon: <FaMapMarkerAlt className="text-emerald-500" />,
    title: "Address",
    description: "Colombo, Sri Lanka"
  }
]

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState("")

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus("")

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )

      setStatus("success")
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      console.error("Error sending email:", error)
      setStatus("error")
    } finally {
      setLoading(false)
    }
  }

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
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-[#0d1525] border border-transparent focus:border-emerald-500 text-white placeholder-gray-400"
            />
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-[#0d1525] border border-transparent focus:border-emerald-500 text-white placeholder-gray-400"
            />
            <Input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="bg-[#0d1525] border border-transparent focus:border-emerald-500 text-white placeholder-gray-400"
            />
            <Textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="bg-[#0d1525] border border-transparent focus:border-emerald-500 text-white placeholder-gray-400 h-32"
            />
            <Button 
              type="submit" 
              disabled={loading}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-full disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </Button>
            {status === "success" && (
              <p className="text-emerald-500 text-center">Message sent successfully! 🎉</p>
            )}
            {status === "error" && (
              <p className="text-red-500 text-center">Failed to send message. Please try again.</p>
            )}
          </form>
        </div>



      </div>
    </div>
  )
}

export default Contact
