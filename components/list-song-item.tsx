"use client";

import { useRouter } from "next/navigation";
import Image from "next/image"

import { FaPlay } from "react-icons/fa"

interface ListSongItemProps {
    name: string;
    author: string;
    image: string;
    // data: string;
    // onClick: (id: string) => void
}

const ListSongItem = ({
    name, author, image
}: ListSongItemProps) => {
    const router = useRouter();
    
    return (
        <div className="bg-neutral-100/10 hover:bg-neutral-100/20 cursor-pointer flex flex-col relative group gap-x-4 items-center justify-center p-2 rounded-xl overflow-hidden transition">
            <div className="aspect-square overflow-hidden relative rounded-md h-full w-full">
                <Image className="object-cover" fill src={image} alt="Image" />
                <div className="absolute bottom-4 right-4 bg-cyan-500 drop-shadow-md group-hover:opacity-100 hover:scale-110 opacity-0 p-2 rounded-full transition">
                    <FaPlay className="text-black"/>
                </div>
            </div>
            <div className="flex flex-col items-start pt-4 px-2 w-full">
                <p className="font-semibold truncate">{name}</p>
                <p className="pb-2 text-neutral-400 text-sm truncate">by {author}</p>
            </div>
        </div>
        
    );
}
 
export default ListSongItem;