import React from 'react';
import './PosterAlbum.scss';
import { NavLink } from 'react-router-dom';
import { TypesPoster } from '../../models/poster';

class PosterAlbum extends React.Component<any, any> {

    setPropsByType() {

        const { data, type } = this.props;

        if (type === TypesPoster.TRACK) {

            const { track } = data;

            return {
                link: `${track.album.type}/${track.album.id}`,
                styling: '',
                title: track.name,
                image: track.album.images[0].url,
                description: track.artists[0].name,
                link_description: `${track.artists[0].type}/${track.artists[0].id}`
            };
        }

        let configItem = { 
            link: `${data.type}/${data.id}`, 
            styling: data.type === 'artist' ? 'round' : '', 
            title: data.name,
            image: data.images[0].url,
            description: '',
            link_description: ''
        };

        return configItem;

    }

    render() {

        return (
            
            <div className={`poster ${ this.setPropsByType().styling || '' }`}>
                <NavLink className="box-album" to={this.setPropsByType().link}>
                    <div className="overlay-play">
                        <i className="material-icons">play_circle_outline</i>
                    </div>
                    <img className="image" src={this.setPropsByType().image}/>
                </NavLink>
                <strong>
                    { this.setPropsByType().title }
                </strong>
                { TypesPoster.TRACK &&  
                    <NavLink to={ this.setPropsByType().link_description }>
                        <small>{ this.setPropsByType().description }</small>
                    </NavLink>
                }
                
            </div>
        );
    }

}

export default PosterAlbum;