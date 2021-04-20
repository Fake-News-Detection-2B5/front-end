import axios from 'axios';
import helper from './helper.js';

const routes = {
    API_URL: 'https://fake-database-fe-support.herokuapp.com'
};

routes['API_PROVIDER'] = '/provider';
routes['API_PROVIDER_COUNT'] = `${routes.API_PROVIDER}/getCount`;
routes['API_PROVIDER_GET_INTERVAL'] = `${routes.API_PROVIDER}/getInterval`;
routes['API_PROVIDER_GET_BY_NAME'] = `${routes.API_PROVIDER}/getByName`;

export default {
    routes: routes,
    get: (path, data) => {
        return axios.get(helper.pathJoin(routes.API_URL, path), { params: data });
    },
    post: (path, data) => {
        return axios.post(helper.pathJoin(routes.API_URL, path), data);
    },
    getUrl: (url, data) => {
        return axios.get(url, { params: data });
    },
    postUrl: (url, data) => {
        return axios.post(url, data);
    }
};