import axios from 'axios';
import qs from "qs";
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
routes['API_POST_GET_INTERVAL_BY_PROVIDER'] = `${routes.API_POST}/getIntervalByProvider`;

routes['API_USER'] = '/user';
routes['API_USER_LOGIN'] = `${routes.API_USER}/login`
routes['API_USER_LOGOUT'] = `${routes.API_USER}/logout`
routes['API_USER_REGISTER'] = `${routes.API_USER}/register`;
routes['API_USER_GET_BY_ID'] = `${routes.API_USER}/get`;
routes['API_USER_UPDATE'] = `${routes.API_USER}/update`;

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
    delete: (path, data) => {
        return axios.delete(helper.pathJoin(routes.API_URL, path), data);
    },
    get2: (path, data, headers) => {
        return axios({
            method: "get",
            url: helper.pathJoin(routes.API_URL2, path),
            params: data,
            headers: headers ?? {}
        });
    },
    get3: (path, data, headers) => {
        return axios({
            method: "get",
            url: helper.pathJoin(routes.API_URL, path),
            params: data,
            headers: headers ?? {}
        });
    },
    post2: (path, data, headers) => {
        return axios({
            method: "post",
            url: helper.pathJoin(routes.API_URL2, path),
            data: qs.stringify(data),
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                ...headers
            }
        })
    },
    post2json: (path, data, headers) => {
        return axios({
            method: "post",
            url: helper.pathJoin(routes.API_URL2, path),
            data: data,
            headers: {
                'content-type': 'application/json',
                ...headers
            }
        })
    },
    delete2: (path, data, headers) => {
        return axios({
            method: "delete",
            url: helper.pathJoin(routes.API_URL2, path),
            data: data,
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                ...headers
            }
        })
    },
    put2: (path, data, headers) => {
        return axios({
            method: "put",
            url: helper.pathJoin(routes.API_URL2, path),
            data: qs.stringify(data),
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                ...headers
            }
        })
        //return axios.put(fullPath, data);
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