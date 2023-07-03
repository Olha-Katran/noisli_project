import React, { FunctionComponent } from 'react';
import './playlistIcon.css';

type PlaylistIconProps = {
    label: string;
    activePlaylists: string[];
    icon: string;
    sounds: string[];
    onPlaylistClick: (label: string, sounds: string[]) => void;
};

export const PlaylistIcon: FunctionComponent<PlaylistIconProps> = ({label, activePlaylists, icon, sounds, onPlaylistClick,
 }) => {
    const isActivePlaylist = activePlaylists.includes(label);

    const handlePlaylistClick = () => {
        onPlaylistClick(label, sounds);
    };

    return (
        <div className='playlists-block'>
            <div
                className={`playlist-icon ${isActivePlaylist ? 'active' : ''}`}
                onClick={handlePlaylistClick}
                data-label={label}
            >
                <i className={`fa-solid ${icon}`}></i>
                <h4>{label}</h4>
            </div>
        </div>
    );
};