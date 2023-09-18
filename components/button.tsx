import { forwardRef } from "react"
import { twMerge } from "tailwind-merge"

interface ButtonProps 
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {}


const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    className, children, disabled, type = "button", ...props
}, ref) => {
    return (
        <button className={twMerge(`
            bg-cyan-500 border border-transparent disabled:cursor-not-allowed disabled:opacity-50 font-bold hover:opacity-75 px-3 py-3 rounded-full text-black w-full transition
        `, className)} disabled={disabled} ref={ref} type={type} {...props}>
            {children}
        </button>
    )
});

Button.displayName = "Button";
export default Button;
