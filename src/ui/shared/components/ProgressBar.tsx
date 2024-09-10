import React from 'react';

interface ProgressBarProps {
    progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({progress}) => {
    return (
        <div className="w-full max-w-[80%] bg-primaryColor-primaryTwo rounded-full h-1">
            <div
                className="bg-secondaryColor-secondaryOne h-1 rounded-full transition-all duration-300"
                style={{width: `${progress}%`}}
            >

            </div>
        </div>
    );
};

export default ProgressBar;
