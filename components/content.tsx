"use client";

import ListSongItem from "./list-song-item";

interface PageContentProps {
    // songs: Song[];
}

const PageContent = ({

}: PageContentProps) => {
    let isEmpty = false;
    if(isEmpty) {
        return (
            <div className="flex flex-col items-center justify-center mt-4 text-neutral-400">
                No song available
            </div>
        )
    }
    return (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 mt-4">
            <ListSongItem image="/images/placeholder_01.jpg" name="Forever & Again" author="The Kid LAROI" />
            <ListSongItem image="/images/placeholder_02.jpg" name="The Grey" author="Bad Omens" />
            <ListSongItem image="/images/placeholder_03.jpg" name="wrong way" author="Dead Lakes" />
            <ListSongItem image="/images/placeholder_04.jpg" name="Chruch" author="Chase Atlantic" />
        </div>
    );
}

export default PageContent;