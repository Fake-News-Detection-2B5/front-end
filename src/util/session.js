import request from "./request.js"

import Cookies from "universal-cookie";

const cookies = new Cookies();

var session = {
    ready: false,
    loaded: false,

    data: {
        userId: null,
        token: null,
        username: null,
        avatar: null,
        bio: null,
        email: null
    },

    onUpdate: null,

    headers: () => ({
        "X-Auth-User": session.data.userId,
        "X-Auth-Token": session.data.token
    })
};

async function initSession() {
    if(!session.ready) {
        try {
            let res = await request.get2(request.routes.API_USER_GET_BY_ID, {
                id: session.data.userId
            }, session.headers());

            session.data.username = res.data.username;
            session.data.avatar = res.data.avatarUrl;
            session.data.bio = res.data.bio;
            session.data.email = res.data.email;

            session.ready = true;
        } catch(err) {
            console.error(err);
            session.ready = false;
        }
    }
}

export default {
    load: async () => {
        session.data.userId = cookies.get("user_id", { path: "/" });
        session.data.token = cookies.get("token", { path: "/" });

        try {
            session.data.userId = cookies.get("user_id", { path: "/" });
            session.data.token = cookies.get("token", { path: "/" });

            if(session.data.userId && session.data.token)
                await initSession();

            session.loaded = true;
        } catch(ex) {
            session.loaded = true;
        }
    },
    login: async (user, pass) => {
        try {
            console.log({
                username: user,
                password: pass
            });
            let res = await request.post2(request.routes.API_USER_LOGIN, {
                username: user,
                password: pass
            });
            
            session.data.userId = res.data.user_id;
            session.data.token = res.data.token;

            cookies.set("user_id", session.data.userId, { path: "/" });
            cookies.set("token", session.data.token, { path: "/" });

            await initSession();

            return Promise.resolve(true);
        } catch(err) {
            console.error(err);

            return Promise.resolve(false);
        };
    },
    logout: async () => {
        try {
            let res = await request.delete2(request.routes.API_USER_LOGOUT, { }, session.headers());

            cookies.remove("user_id", { path: "/" });
            cookies.remove("token", { path: "/" });

            session.ready = false;

            return Promise.resolve(true);
        } catch(err) {
            console.error(err);
            return Promise.resolve(false);
        };
    },
    register: async (username, email, pass) => {
        try {
            let res = await request.post2json(request.routes.API_USER_REGISTER, {
                username: username,
                passwordHash: pass,
                avatarUrl: "https://www.kindpng.com/picc/m/21-214439_free-high-quality-person-icon-default-profile-picture.png",
                bio: "I am " + username + " and this is my bio. Change me!",
                email: email
            });
            
            // session.data.userId = res.data.user_id;
            // session.data.token = res.data.token;

            // cookies.set("user_id", session.data.userId, { path: "/" });
            // cookies.set("token", session.data.token, { path: "/" });
            return Promise.resolve(res.data == true);
        } catch(err) {
            console.error(err);
            return Promise.resolve(false);
        };
    },
    authHeaders: () => session.headers(),
    isReady: () => session.ready,
    isLoaded: () => session.loaded,
    onUpdate: () => session.onUpdate(),
    setUpdate: (handler) => session.onUpdate = handler,
    get: () => session.data
}