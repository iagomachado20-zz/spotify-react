import React from 'react';
import MenuNavigation from '../../components/MenuNavigation/MenuNavigation';
import CarrouselPoster from '../../components/CarrouselPosters/CarrouselPosters';
import { CrudService } from '../../services/crud.service';
import { TypesPoster } from '../../models/poster';
import Axios from 'axios';

export default class HomePage extends React.Component {
    
    state = {
        recent: [],
        playlists: [],
        top_artists: []
    }

    componentDidMount() {

        const endpoints = [
            'me/player/recently-played?limit=6',
            'me/playlists?limit=6',
            'me/top/artists?time_range=medium_term&limit=6'
        ];

        CrudService.getDataAll(endpoints)
        .then(Axios.spread((...endpoints: any) => {

            this.setState({
                recent: endpoints[0].data.items,
                playlists: endpoints[1].data.items,
                top_artists: endpoints[2].data.items
            });

        }));

    }


    render() {

        return <div>
            <MenuNavigation/>
            <CarrouselPoster  
                title="Tocados Recentemente"
                type={TypesPoster.TRACK}
                description="Veja todas as músicas que você ouviu recentemente" 
                items={ this.state.recent }>  
            </CarrouselPoster>
            {
                this.state.playlists.length > 0 &&
                <CarrouselPoster
                    title="Playlists"
                    type={TypesPoster.PLAYLIST}
                    description="Suas Playlists favoritas" 
                    items={ this.state.playlists }>  
                </CarrouselPoster>
            }
            {
                this.state.top_artists.length > 0 &&
                <CarrouselPoster
                    title="Seus artistas favoritos"
                    type={TypesPoster.ARTIST}
                    items={ this.state.top_artists }>  
                </CarrouselPoster>
            }
        </div>

    }

}