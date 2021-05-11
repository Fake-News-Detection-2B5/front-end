import request from '../src/util/request.js';
import shiyou from '@exom-dev/jshiyou';

shiyou.test('Request', 'Request posts returns something', async () => {
    try {
        let res = await request.get(request.routes.API_POST_GET_INTERVAL, {
            skip: 0,
            count: 100,
        });
        return Promise.resolve(res.data.length > 0);
    }
    catch(ex) {
        //console.log(ex);
        return Promise.resolve(false);
    }
});
shiyou.test('Request', 'Request providers returns something', async () => {
    try {
        let res = await request.get(request.routes.API_PROVIDER_GET_INTERVAL, {
            skip: 0,
            count: 100,
            query: ""
        });
        return Promise.resolve(res.data.length > 0);
    }
    catch(ex) {
        //console.log(ex);
        return Promise.resolve(false);
    }
});
shiyou.test('Request', 'User interacted with a provider', async () => {
    try {
        let res = await request.get(request.routes.API_PREFERENCES_GET, {
            uid: 43,
            prov_id: 1
        });
        return Promise.resolve(res.data.toString().trim().toLowerCase() === "true" || res.data.toString().trim().toLowerCase() === "false");
    }
    catch(ex) {
        //console.log(ex);
        return Promise.resolve(false);
    }
});

(async () => {
    shiyou.run();
})();