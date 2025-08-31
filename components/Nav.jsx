"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        name: "home",
        path: "/"
    },

    {
        name: "Resume",
        path: "/resume"
    },

    {
        name: "Works",
        path: "/works"
    },

    {
        name: "Contact",
        path: "/contact"
    },

]

const Nav = () => {
    const pathname = usePathname();
    console.log(pathname);
    return (
        <nav className="flex gap-8 ">
            {links.map((link, index) => {
                return (
                    <Link
                        href={link.path}
                        key={index}
                        className={`${link.path  === pathname && 'text-emerald-500 border-b-2 border-emerald-500'
                            } capitalize font-medium hover:text-emerald-500 transition-all`}
                    >
                        {link.name}
                    </Link>
                );
            })}
        </nav>
    )
}

export default Nav
