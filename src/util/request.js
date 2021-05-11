import axios from 'axios';
import helper from './helper.js';

const routes = {
    API_URL: 'https://fake-news-zuul-gateway.herokuapp.com/fake-database',
    API_URL2: 'https://fake-database-fe-support.herokuapp.com'
};

routes['API_PROVIDER'] = '/provider';
routes['API_PROVIDER_BY_ID'] = `${routes.API_PROVIDER}/getById`;
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
routes['API_PREFERENCES_GET_SUBSCRIBED_PROVIDERS'] = `${routes.API_PREFERENCES}/getByUserId`;

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
    put2: (path, data) => {
        var fullPath = helper.pathJoin(routes.API_URL, path);
        fullPath += '?';
        var first = true;
        for (const [key, value] of Object.entries(data)) {
            if(first) {
                first = false;
            }
            else {
                fullPath += '&'
            }
            fullPath += key + '=' + value;
          }
        return axios.put(fullPath, data);
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