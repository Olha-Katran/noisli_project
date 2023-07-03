import React, { FunctionComponent } from 'react';
import './prepared-playlists.css';
import preparedPlaylists from '../playlistIcon/preparedPlaylists.json';
import {PlaylistIcon} from "../playlistIcon/playlistIcon";

type PreparedPlaylist = {
    sounds: string[],
    label: string,
    icon: string,
};

type PlaylistProps = {
    handlePlaylistClick: (label: string, sounds:string[]) => void;
    activePlaylist: string | null
};

export const PreparedPlaylists: FunctionComponent<PlaylistProps> = ({ handlePlaylistClick, activePlaylist}) => {


    const renderPlaylists = () => {
        return (
            <div className='container-prepared-playlists'>
                {preparedPlaylists.map((item: PreparedPlaylist) => (
                    <PlaylistIcon
                        key={item.label}
                        label={item.label}
                        activePlaylists={activePlaylist ? [activePlaylist] : []}
                        icon={item.icon}
                        sounds={item.sounds}
                        onPlaylistClick={handlePlaylistClick}
                    />
                ))}
            </div>
        );
    };

    return (
        <div>
            {renderPlaylists()}
        </div>
    )
};