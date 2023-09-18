import { twMerge } from "tailwind-merge";

interface BoxProps {
    children: React.ReactNode;
    className?: string;
}

const Box = ({
    children, className
}: BoxProps) => {
    return ( 
        <div className={twMerge(`
        bg-neutral-900 rounded-xl h-fit w-full
        `, className)}>
            {children}
        </div>
    );
}
 
export default Box;