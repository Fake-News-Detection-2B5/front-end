import React, { Component } from "react";

import session from "../../util/session";

import '../../style/style.scss';

class JustUserPicture extends Component {
    render() {
        return (
            <React.Fragment>
                {session.isReady() ?
                <img 
                id="photo-border"
                src={session.get().avatar} alt={session.get().username}
                width="100%"
                height="100%"
                />
                : "Loading..."}
            </React.Fragment>
        )
    }
}

export default JustUserPicture;