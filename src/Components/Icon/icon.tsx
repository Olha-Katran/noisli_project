import React, { FunctionComponent } from 'react';
import './icon.css';

type iconProps = {
    label: string;
    icon: string;
    isPlaying: boolean;
    onIconClick: (label: string) => void;
};

const Icon:FunctionComponent<iconProps> = ({
    label,
    icon,
    isPlaying,
    onIconClick,
}) => {
    const handleClick = () => {
        onIconClick(label);
    };

    return (
        <div
            onClick={handleClick}
            data-label={label}
            className={`icon ${isPlaying ? 'activeIcon' : '' }`}
        >
            <i className={`fa-brands ${icon} fa-5x`}></i>
        </div>
    )
};

export default Icon;