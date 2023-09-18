"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react"

import { Home, Search, User } from "lucide-react"
import { HiHome } from "react-icons/hi"
import { BiSearch } from "react-icons/bi"

import Box from "@/components/box";
import SideBarItem from "./sidebar-item";
import Library from "@/components/library";

interface SideBarProps {
    children: React.ReactNode
}

const SideBar = ({
    children
}: SideBarProps) => {
    const pathname = usePathname();
    const routes = useMemo(() => [
        {
            icon: HiHome,
            label: 'Home',
            active: pathname !== '/search',
            href: '/'
        },
        {
            icon: BiSearch,
            label: 'Search',
            active: pathname === '/search',
            href: '/search'
        }
    ], [pathname]);

    return (
        <div className="flex h-full text-white">
            <div className="hidden md:flex md:flex-col gap-y-4 bg-black h-full w-80 px-4 py-3">
                <Box className="px-3 py-2">
                    <div className="flex flex-col gap-y-4 px-2 py-2">
                        {routes.map((item) => (
                            <SideBarItem key={item.label} {...item} />
                        ))}
                    </div>
                </Box>
                <Box className="overflow-y-auto h-full">
                    <Library />
                </Box>
                <Box className="px-3 py-2">
                    <div className="flex flex-col gap-y-4 px-2 py-2">
                        <div className="flex flex-row gap-x-3 items-center">
                            <User size={32} />
                            <div className="flex flex-col">
                                <p className="font-bold text-sm">ItsMeRay</p>
                                <p className="font-semibold text-neutral-400 text-xs">bruhitsmeray@proton.me</p>
                            </div>
                        </div>
                    </div>
                </Box>
            </div>
            <main className="flex-1 overflow-y-auto h-full py-3">
                {children}
            </main>
        </div>
    );
}

export default SideBar;