"use client";

import { AiOutlinePlus } from "react-icons/ai"
import { TbPlaylist } from "react-icons/tb"

interface LibraryProps {

}

const Library = ({

}: LibraryProps) => {
    let isEmpty = true;
    const onClick = () => {
        // Might delete later, idk.
    };

    return ( 
        <div className="flex flex-col h-full">
            <div className="flex items-center justify-between py-4 px-5">
                <div className="inline-flex items-center gap-x-3">
                    <TbPlaylist className="text-neutral-400" size={26} />
                    <p className="font-medium text-md text-neutral-400">Library</p>
                </div>
                <AiOutlinePlus className="cursor-pointer hover:text-white text-neutral-400 transition" onClick={onClick} size={20} />
            </div>
            <div className="flex flex-col gap-y-2 px-5 h-full">
                {isEmpty && (
                    <div className="flex flex-col items-center justify-center h-full">
                        <p className="text-neutral-400">Empty</p>
                    </div>
                )}
            </div>
        </div>
    );
}
 
export default Library;