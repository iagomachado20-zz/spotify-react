import React from 'react';

import './Artist.scss';

export default class ArtistPage extends React.Component {

    render() {
        return (
            <div className="container-noppading">
                <header className="heading-banner-artist">
                    <div className="content">
                        <small>31.394.220 OUVINTES MENSAIS</small>
                        <h1 className="title">Dua Lipa</h1>
                        <div className="actions">
                            <button className="button primary">Play</button>
                            <button className="button outline">Seguir</button>
                        </div>
                    </div>
                </header>
            </div>
        )
    }

}