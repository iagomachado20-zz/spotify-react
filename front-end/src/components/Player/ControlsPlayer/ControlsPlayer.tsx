import React from 'react';
import '../ControlsPlayer/ControlsPlayer.scss';

const PlayerControls: React.FC = () =>
    <div className="player-controls">
        <button className="button-action" title="Voltar">
            <i className="material-icons">skip_previous</i>
        </button>
        <button className="button-action play" title="Play">
            <i className="material-icons">play_circle_outline</i>
        </button>
        <button className="button-action" title="Avançar">
            <i className="material-icons">skip_next</i>
        </button>
    </div>

export default PlayerControls    