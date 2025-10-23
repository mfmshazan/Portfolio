"use client";

import { useState, useEffect } from "react";

const links = [
    {
        name: "home",
        path: "#home"
    },
    {
        name: "About-Me",
        path: "#resume"
    },
    {
        name: "Services",
        path: "#services"
    },
    {
        name: "Projects",
        path: "#works"
    },
    {
        name: "Contact",
        path: "#contact"
    },
]

const Nav = () => {
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            const sections = links.map(link => link.path.substring(1));
            
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (e, path) => {
        e.preventDefault();
        const targetId = path.substring(1);
        const element = document.getElementById(targetId);
        
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
        <nav className="flex gap-6">
            {links.map((link, index) => {
                const sectionId = link.path.substring(1);
                const isActive = activeSection === sectionId;
                
                return (
                    <a
                        href={link.path}
                        key={index}
                        onClick={(e) => scrollToSection(e, link.path)}
                        className={`${isActive ? 'text-emerald-500 border-b-2 border-emerald-500' : ''
                            } capitalize text-sm font-medium hover:text-emerald-500 hover:scale-110 transition-all duration-300 cursor-pointer relative group`}
                    >
                        {link.name}
                        {!isActive && (
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-500 group-hover:w-full transition-all duration-300"></span>
                        )}
                    </a>
                );
            })}
        </nav>
    )
}

export default Nav
