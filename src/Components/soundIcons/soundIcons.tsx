import React, { FunctionComponent } from 'react';
import './soundIcons.css';
import audioClips from '../audioClips.json';
import Icon from "../Icon/icon";
import {Sound} from "../main/main";

type SoundIconProps = {
    activeSounds: Sound[];
    onIconClick: (label: string) => void;
}

export const SoundIcons: FunctionComponent<SoundIconProps> = ({activeSounds, onIconClick}) => {

    // const soundPlay = (src: string, label: string) => {
    //     const sound = new Howl({
    //         src,
    //         html5: true,
    //         onend: () => {
    //             setSoundStates((prevStates) => ({
    //                 ...prevStates,
    //                 [label]: {
    //                     ...prevStates[label],
    //                     isPlaying: false
    //                 }
    //             }));
    //         }
    //     });
    //
    //     setSoundStates((prevStates) => ({
    //         ...prevStates,
    //         [label]: {
    //             sound,
    //             isPlaying: true,
    //         }
    //     }));
    //     sound.play();
    // };

    const renderIcons = () => {
        return (
            <div className='containerIcons'>
                {audioClips.map((clip) => (
                    <Icon
                        key={clip.label}
                        label={clip.label}
                        icon={clip.icon}
                        isPlaying={activeSounds.some(obj => obj.name === clip.label)}
                        onIconClick={onIconClick}
                    />
                ))}
            </div>
        );
    };

    return <div>{renderIcons()}</div>;
};