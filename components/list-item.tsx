"use client";

import { useRouter } from "next/navigation";
import Image from "next/image"

import { FaPlay } from "react-icons/fa"

interface ListItemProps {
    image: string;
    name: string;
    href: string;
}

const ListItem = ({
    name, href, image
}: ListItemProps) => {
    const router = useRouter();
    const onClick = () => {
        router.push(href);
    }
    
    return ( 
        <button onClick={onClick} className="relative group flex items-center rounded-xl overflow-hidden gap-x-4 bg-neutral-100/10 hover:bg-neutral-100/20 transition pr-4">
            <div className="relative min-h-[64px] min-w-[64px]">
                <Image className="object-cover" fill src={image} alt="Image" />
            </div>
            <p className="font-semibold px-2 truncate">{name}</p>
            <div className="bg-cyan-500 drop-shadow-md group-hover:opacity-100 hover:scale-110 ml-auto opacity-0 p-2 rounded-full transition">
                <FaPlay className="text-black"/>
            </div>
        </button>
    );
}
 
export default ListItem;