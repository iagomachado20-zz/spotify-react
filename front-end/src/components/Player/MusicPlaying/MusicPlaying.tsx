import React from 'react';
import '../MusicPlaying/MusicPlaying.scss';
import Like from '../../Actions/Like/Like';

const MusicPlaying: React.FC = () =>
    <div className="block-music-current">
        <a href="/" className="music-current">
            <img alt="Titulo" src="https://i.scdn.co/image/ab67616d00004851445646296c498e5d962def4a" className="photo-album"/>
            <div className="text">
                <h5>Com quem Será - Ao Vivo</h5>
                <small>Atitude 67</small>
            </div>
        </a>
        <Like/>
    </div>

export default MusicPlaying    