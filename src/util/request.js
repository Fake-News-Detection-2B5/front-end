import axios from 'axios';
import helper from './helper.js';

const routes = {
    API_URL: 'https://fake-database-fe-support.herokuapp.com'
};

routes['API_PROVIDER'] = '/provider';
routes['API_PROVIDER_COUNT'] = `${routes.API_PROVIDER}/getCount`;
routes['API_PROVIDER_GET_INTERVAL'] = `${routes.API_PROVIDER}/getInterval`;
routes['API_PROVIDER_SEARCH_COUNT'] = `${routes.API_PROVIDER}/searchCount`;
routes['API_PROVIDER_SEARCH'] = `${routes.API_PROVIDER}/search`;
routes['API_PROVIDER_GET_BY_NAME'] = `${routes.API_PROVIDER}/getByName`;

routes['API_POST'] = '/post';
routes['API_POST_GET_INTERVAL'] = `${routes.API_POST}/getInterval`;

routes['API_USER'] = '/user';
routes['API_USER_GET_BY_ID'] = `${routes.API_USER}/get`;

routes['API_PREFERENCES'] = '/preferences';
routes['API_PREFERENCES_GET'] = `${routes.API_PREFERENCES}/isSubscribed`;
routes['API_PREFERENCES_UPDATE'] = `${routes.API_PREFERENCES}/updateSubscriptionStatus`;

export default {
    routes: routes,
    get: (path, data) => {
        return axios.get(helper.pathJoin(routes.API_URL, path), { params: data });
    },
    post: (path, data) => {
        return axios.post(helper.pathJoin(routes.API_URL, path), data);
    },
    put: (path, data) => {
        return axios.put(helper.pathJoin(routes.API_URL, path), data);
    },
    getUrl: (url, data) => {
        return axios.get(url, { params: data });
    },
    postUrl: (url, data) => {
        return axios.post(url, data);
    },
    putUrl: (url, data) => {
        return axios.put(url, data);
    }
};