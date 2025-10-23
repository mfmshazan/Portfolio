"use client"

import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  const scrollToContact = (e) => {
    e.preventDefault();
    const element = document.getElementById("contact");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header className="py-3 xl:py-4 text-white bg-[#0a0f1c]/80 backdrop-blur-md border-b border-white/10 sticky top-0 z-50 shadow-lg" >
      <div className="container mx-auto flex justify-between items-center">
        {/*logo*/} 
        <Link href="/">
          <h1 className="text-2xl xl:text-2xl text-white font-semibold">
            shazan
          </h1>
        </Link>
        
        {/*Desktop nav*/}
        <div className="hidden xl:flex items-center gap-6">
          <Nav />
          <a href="#contact" onClick={scrollToContact}>
            <Button className="text-sm py-2 px-4">Hire me</Button>
          </a>
        </div>

        {/*mobile nav*/}
        <div className="xl:hidden">
          <MobileNav/>
        </div>
      </div>
    </header>
  )
}

export default Header
