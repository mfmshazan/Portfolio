"use client"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "Resume",
        path: "/resume",
    },
    {
        name: "Works",
        path: "/works",
    },
    {
        name: "Contact",
        path: "/contact",
    },
]

const MobileNav = () => {
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-emerald-500">
                </CiMenuFries>
            </SheetTrigger>

            <SheetContent className="flex flex-col">
                <div className="text-2xl top-8 font-semibold mb-20px">Logo</div>

                <nav className="flex flex-col justify-center items-center gap-8 py-4px">
                    {links.map((link, index) => {
                        return (
                            <Link href={link.path}
                                key={index}
                                className={`${link.path === pathname &&
                                    "text-emerald-500 border-b-2 border-emerald-500"}
                        text-xl capitalize hover:text-emerald-500 transition-all`}>
                                {link.name}
                            </Link>
                        )
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav
