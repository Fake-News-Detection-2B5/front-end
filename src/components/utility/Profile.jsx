import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [userMetadata, setUserMetadata] = useState(null);

  const interval = setInterval(async () => {
    const domain = "gmatei.eu.auth0.com";

    try {
      if (!isAuthenticated) {
        return;
      }
      clearInterval(interval);
      const accessToken = await getAccessTokenSilently({
        audience: `https://gmatei.eu.auth0.com/api/v2/`,
        scope: "read:messages",
      });
      const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;

      console.log(accessToken);
      console.log(userDetailsByIdUrl);
      console.log(JSON.stringify(user));

      const metadataResponse = await fetch(userDetailsByIdUrl, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const { user_metadata } = await metadataResponse.json();

      setUserMetadata(user_metadata);
    } catch (e) {
      console.log(e);
    }
  }, 100);

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <h3>User Metadata</h3>
        {userMetadata ? (
          <pre>{JSON.stringify(userMetadata, null, 2)}</pre>
        ) : (
          "No user metadata defined"
        )}
      </div>
    )
  );
};

export default Profile;
