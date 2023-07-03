import React, {FunctionComponent, useEffect, useState} from 'react';
import './main.css';
import { SoundIcons } from '../soundIcons/soundIcons';
import { Playlists } from '../playlists/Playlists';
import { PreparedPlaylists } from '../Prepared-playlists/prepared-playlists';
import audioClips from '../audioClips.json';
import {Howl} from "howler";

export class Sound {
    media : Howl | undefined;
    name: string | undefined;
}

export const Main: FunctionComponent = () => {
    const [timerId, setTimerId] = useState<number | null>(null);
    const [activeSounds, setActiveSounds] = useState<Sound[]>([]);
    const [activePlaylist, setActivePlaylist] = useState<string | null>(null);


    const soundPause = (label: string) => {
        const activeSound = activeSounds.find(obj => obj.name === label);
        if (activeSound) {
            activeSound?.media?.pause();
            setActiveSounds(activeSounds.filter(sound => sound.name !== label));
        }
    };

    const soundPauseAll = () => {
        activeSounds.forEach(sound => {
            sound?.media?.pause();
        });

        setActiveSounds([])
    };

    const soundPlay = (label: string) => {
        const soundObj = audioClips.find((clip) => clip.label === label);
        if (soundObj) {
            const soundMedia = new Howl({
                src: soundObj.sound,
                html5: true,
                onend: () => {
                    window.setTimeout(() => startTimer(label), 0);
                }
            });
            soundMedia.play()

            const sound = new Sound();
            sound.media = soundMedia;
            sound.name = label;

            setActiveSounds((prevState) => ([
                ...prevState,
                sound
            ]))
            startTimer(label);
        }
    }

    const toggleSound = (label: string) => {
        if (Array.isArray(activeSounds) && activeSounds.some(obj => obj.name === label)) {
            soundPause(label);
        } else {
            soundPlay(label);
        }
    };
    const handlePlaylistClick = (label:string, sounds: string[]) => {
        soundPauseAll();
        if(label === activePlaylist) {
            setActivePlaylist(null);
        } else {
            sounds.forEach((sounds => soundPlay(sounds)))
            setActivePlaylist(label);
        }

    };


    const startTimer = (label:string) => {
            const timer = window.setTimeout(() => {
                soundPause(label)
            }, 60 * 60 * 1000);
            if (timerId) {
                window.clearTimeout(timerId);
            }

            setTimerId(timer);
    };

    useEffect(() => {
        return () => {
            if(timerId) {
                window.clearTimeout(timerId);
            }
        };
    }, [timerId]);

    return (
        <div className="baseElement">
            <div className="playlist-receptacle">
                <Playlists />
                <PreparedPlaylists
                    handlePlaylistClick={handlePlaylistClick}
                    activePlaylist={activePlaylist}
                />
            </div>

            <div className="icons">
                <SoundIcons activeSounds={activeSounds} onIconClick={toggleSound} />
            </div>
        </div>
    );
};