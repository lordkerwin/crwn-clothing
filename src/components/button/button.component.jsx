import { clsx } from "clsx";

const Button = ({
    children,
    type = "submit",
    buttonType = "default",
    onClick,
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={clsx(
                "inline-flex justify-center items-center rounded-md border border-transparent px-4 py-3 text-sm font-bold leading-4 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2",
                [
                    buttonType === "default" &&
                        "bg-black text-white hover:bg-black/75 focus:ring-black",
                ],
                [
                    buttonType === "google" &&
                        "bg-blue-500 text-white hover:bg-blue-500/75 focus:ring-blue-500",
                ],
                [
                    buttonType === "inverted" &&
                        "bg-white text-black hover:bg-black hover:text-white focus:ring-black",
                ]
            )}
        >
            {children}
        </button>
    );
};

export default Button;
