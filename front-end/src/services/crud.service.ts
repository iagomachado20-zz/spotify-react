import axios from 'axios';
import { enviroment } from '../enviroments/enviroment';

const configHeader = {
    headers: {'Authorization': `Bearer ${enviroment.AUTH_TOKEN}`},
    json: true
};

export class CrudService {
    
    static getData(param: string) {

        return axios.get(`${enviroment.API_URL}${param}`, configHeader);

    }

    static getDataAll(endpoints: string[]) {

        const listEndpoints: any = [];
        endpoints.forEach(url =>  
            listEndpoints.push(axios.get(enviroment.API_URL + url, configHeader)
        ));

        return axios.all(listEndpoints);

    }

}