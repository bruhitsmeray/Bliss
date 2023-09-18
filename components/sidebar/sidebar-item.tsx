import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { IconType } from "react-icons";

interface SideBarItemProps {
    icon: IconType;
    label: string;
    active?: boolean;
    href: string;
}

const SideBarItem = ({
    icon: Icon, label, active, href
}: SideBarItemProps) => {
    return ( 
        <Link href={href} className={twMerge(`
            flex flex-row gap-4 items-center h-auto w-full text-md font-medium cursor-pointer hover:text-white transition text-neutral-400
        `, active && "text-white")}>
            <Icon size={26} />
            <p className="truncate w-full">{label}</p>
        </Link>
    );
}
 
export default SideBarItem;