import React from 'react';
import PosterAlbum from '../PosterAlbum/PosterAlbum';

// Style
import './CarrouselPosters.scss';
import { Carrousel, TypesPoster } from '../../models/poster';

class CarrouselPoster extends React.Component<Carrousel, any> {

    constructor(props: Carrousel) {
        super(props);
        props = { items: [], title: '', type: TypesPoster.TRACK};
    }

    render() {

        const { items } = this.props;

        return (
            <div className="carrousel-poster">
                <header className="header">
                    <h1 className="title">{ this.props.title }</h1>
                    { this.props.description &&
                        <p className="description">{ this.props.description }</p>
                    }
                </header>
                <ul className="list-posters">
                    { items.map((item, index) => {

                        return (
                            <li key={index}> 
                                <PosterAlbum  
                                    type={ this.props.type } 
                                    data={ item }
                                /> 
                            </li>
                        );
                    }) }
                </ul>
            </div>
        );
    }

}

export default CarrouselPoster;