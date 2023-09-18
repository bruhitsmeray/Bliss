"use client";

import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge"

import { BiSearch } from "react-icons/bi"
import { HiHome } from "react-icons/hi"
import { RxCaretLeft, RxCaretRight } from "react-icons/rx"
import Button from "@/components/button";

interface HeaderProps {
    children: React.ReactNode;
    className?: string;
}

const Header = ({
    children, className
}: HeaderProps) => {
    const router = useRouter();

    const handleLogOut = () => {
        // Will do stuff later
    }

    return ( 
        <div className={twMerge(`
            bg-gradient-to-b from-cyan-800 px-6 py-1 h-fit
        `, className)}>
            <div className="flex items-center justify-between mb-4 w-full">
                <div className="hidden md:flex gap-x-2 items-center">
                    <button className="bg-black flex items-center justify-center rounded-full">
                        <RxCaretLeft onClick={() => router.back()} className="hover:opacity-75 transition text-white" size={32} />
                        <RxCaretRight onClick={() => router.forward()} className="hover:opacity-75 transition text-white" size={32} />
                    </button>
                </div>
                <div className="flex md:hidden gap-x-4 items-center">
                    <button className="bg-black flex items-center justify-center hover:opacity-75 p-2 rounded-full transition">
                        <HiHome className="text-white" size={24} />
                    </button>
                    <button className="bg-black flex items-center justify-center hover:opacity-75 p-2 rounded-full transition">
                        <BiSearch className="text-white" size={24} />
                    </button>
                </div>
                <div className="flex gap-x-4 items-center justify-between">
                    <>
                        <div>
                            <Button onClick={() => {}} className="bg-transparent font-medium text-neutral-300">
                                Sign up
                            </Button>
                        </div>
                        <div>
                            <Button onClick={() => {}} className="bg-white px-6 py-[0.15rem]">
                                Log in
                            </Button>
                        </div>
                    </>
                </div>
            </div>
            {children}
        </div>
    );
}
 
export default Header;