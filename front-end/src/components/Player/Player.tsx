import React from 'react';
import './Player.scss';
import ControlsPlayer from './ControlsPlayer/ControlsPlayer';
import TimelinePlayer from './TimelinePlayer/TimelinePlayer';
import VolumePlayer from './VolumePlayer/VolumePlayer';
import MusicPlaying from './MusicPlaying/MusicPlaying';

const Player: React.FC = () =>
    <div className="player-bar">
        <ControlsPlayer/>
        <TimelinePlayer/>
        <VolumePlayer/>
        <MusicPlaying/>
    </div>

export default Player    