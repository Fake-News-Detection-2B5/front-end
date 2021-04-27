import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import "../../style/settings.scss";

const JustUserPicture = () => {
    const { isAuthenticated, user } = useAuth0();

    return (
        <React.Fragment>
            {isAuthenticated ?
            <img 
            id="photo-border"
            src={user.picture} alt={user.name}
            width="100%"
            height="100%"
            />
            : "Error"}
        </React.Fragment>
    )
}

export default JustUserPicture;