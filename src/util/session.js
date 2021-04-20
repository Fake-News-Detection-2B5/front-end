import request from "./request.js"

var session = {
    ready: false,

    data: {
        userId: 43, // Retrieve this from the server.

        username: null,
        avatar: null,
        bio: null,
        email: null
    }
};

export default {
    init: () => {
      if(!session.ready) {
        request.get(request.routes.API_USER_GET_BY_ID, {
            id: session.data.userId
        }).then((res) => {
                session.data.username = res.data.username;
                session.data.avatar = res.data.avatarUrl;
                session.data.bio = res.data.bio;
                session.data.email = res.data.email;

                session.ready = true;
            }).catch((err) => {
                console.error(err);
                session.ready = true;
        });
      }
    },
    isReady: () => session.ready,
    get: () => session.data
}