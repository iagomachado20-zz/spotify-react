import React, { Component } from 'react';

//Style
import './UserArea.scss';

export class UserArea extends Component<any, any> {

    constructor(props: any){

        super(props);
        const params = this.getHashParams();
        
        localStorage.setItem('tokenSpotify', params.access_token);
        
    }

    getHashParams() {
        var hashParams: any = {};
        var e, r = /([^&;=]+)=?([^&;]*)/g,
            q = window.location.hash.substring(1);
        e = r.exec(q)
        while (e) {
            hashParams[e[1]] = decodeURIComponent(e[2]);
            e = r.exec(q);
        }
        return hashParams;
    }

    render() {
        return <div>
            <a href="http://localhost:8888/login" className="bt-enter">Entrar</a>
        </div>
    }

}
