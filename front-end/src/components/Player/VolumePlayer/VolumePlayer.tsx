import React from 'react';
import '../VolumePlayer/VolumePlayer.scss';

const VolumePlayer: React.FC = () =>
    <div className="volume-control">
        <button className="button-state">
            <i className="material-icons">volume_up</i>
        </button>
        <div className="bar">
            <input type="range" className="range-input"/>
            <div className="pct"></div>
        </div>
    </div>

export default VolumePlayer    