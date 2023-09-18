import PageContent from "@/components/content";
import Header from "@/components/header";
import ListItem from "@/components/list-item";
import ListSongItem from "@/components/list-song-item";

export default function Home() {
  return (
    <div className="bg-slate-900 rounded-xl overflow-hidden overflow-y-auto h-full w-full">
      <Header>
        <div className="mb-2">
          <h1 className="font-bold text-3xl text-white">Welcome</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 mt-6">
            <ListItem image="/images/liked.png" name="Favorites" href="favs" />
            <ListItem image="/images/liked.png" name="History" href="history" />
          </div>
        </div>
      </Header>
      <div className="md:mt-4 md:mb-8 px-6">
        <div className="flex justify-between items-center">
          <h1 className="font-semibold text-2xl">New releases</h1>
        </div>
        <PageContent />
      </div>
    </div>    
  )
}
