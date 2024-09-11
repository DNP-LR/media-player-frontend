import React from "react";
import {twMerge} from "tailwind-merge";

const WrapperPage: React.FC<{ className?: string, children: React.ReactNode }> = ({children, className}) => {
    return (
        <div className={twMerge(
            "bg-primaryColor-primaryOne h-screen w-screen flex items-center justify-center",
            className
        )}>
            {children}
        </div>
    );
};

export default WrapperPage;
