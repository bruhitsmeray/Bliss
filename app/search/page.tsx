import Header from "@/components/header";

interface SearchProps {
    searchParams: {
        title: string;
    }
}

const Search = async ({
    searchParams
}: SearchProps) => {
    return(
        <div className="bg-neutral-900 overflow-hidden overflow-y-auto rounded-lg h-full w-full">
            <Header className="from-bg-neutral-900">
                <div className="flex flex-col gap-y-6 mb-2">
                    <h1 className="font-semibold text-3xl">Search</h1>
                </div>
            </Header>
        </div>
    )
}

export default Search;