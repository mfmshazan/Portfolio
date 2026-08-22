"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import Social from "@/components/Social";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const contactInfo = [
  { icon: <FaPhoneAlt />, title: "Phone", description: "+94 769157565" },
  { icon: <FaEnvelope />, title: "Email", description: "faslanshazan23@gmail.com" },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    description: "Katubedda, Colombo, Sri Lanka",
  },
];

const inputStyles =
  "bg-black border border-white/10 focus:border-emerald-400 text-white placeholder-white/30 transition-all hover:border-white/25";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");
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
      );
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatedSection
      id="contact"
      className="relative overflow-hidden bg-[#050505] px-6 py-28 text-white md:px-12 md:py-36"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(108,196,23,0.06),transparent_70%)]" />

      <div className="relative mx-auto max-w-6xl">
        <SectionHeading index="04" label="Contact" title="LET'S BUILD" />

        <div className="grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-20">
          {/* Left */}
          <div>
            <p className="reveal max-w-md text-white/50" data-reveal="left">
              Have a project in mind or just want to say hello? My inbox is always
              open — let&apos;s create something exceptional together. 👋
            </p>

            <div className="mt-10 space-y-6">
              {contactInfo.map((item) => (
                <div
                  key={item.title}
                  className="reveal group flex items-center gap-5"
                  data-reveal="left"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-emerald-400 transition-all group-hover:border-emerald-400 group-hover:shadow-[0_0_12px] group-hover:shadow-emerald-400/30">
                    {item.icon}
                  </span>
                  <div>
                    <p className="font-primary text-xs uppercase tracking-[0.2em] text-white/40">
                      {item.title}
                    </p>
                    <p className="text-white/80">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="reveal mt-10" data-reveal="left">
              <Social
                containerStyles="flex gap-4"
                iconStyles="border border-white/20 p-2.5 rounded-full text-white/70 transition-all duration-300 hover:text-emerald-400 hover:border-emerald-400 hover:scale-110"
              />
            </div>
          </div>

          {/* Right - form */}
          <form
            onSubmit={handleSubmit}
            className="reveal space-y-5 rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8"
            data-reveal="right"
          >
            <Input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className={inputStyles}
            />
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className={inputStyles}
            />
            <Input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className={inputStyles}
            />
            <Textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
              className={`${inputStyles} h-32`}
            />
            <Button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-emerald-500 text-black transition-all hover:bg-emerald-400 disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </Button>
            {status === "success" && (
              <p className="text-center text-emerald-400">
                Message sent successfully! 🎉
              </p>
            )}
            {status === "error" && (
              <p className="text-center text-red-500">
                Failed to send message. Please try again.
              </p>
            )}
          </form>
        </div>

        {/* footer */}
        <div className="reveal mt-24 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 font-primary text-xs uppercase tracking-[0.2em] text-white/40 sm:flex-row">
          <span>© {new Date().getFullYear()} Shazan Faslan</span>
          <span>Designed &amp; built in Sri Lanka</span>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Contact;
