import React, {useEffect, useState} from "react";
import axios from "axios";

const TwitterProfileDetails = () => {
  const [userDetails, setUserDetails] = useState(null);
  const username = "princesqnce"; // Replace with your Twitter username

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Step 1: Get Bearer Token
        const credentials = btoa(
          "xvz1evFS4wEEPTGEFPHBog:L8qq9PZyRg6ieKGEKhZolGC0vJWLw8iEJ88DRdyOg"
        );
        const responseToken = await axios.post(
          "https://api.twitter.com/oauth2/token",
          "grant_type=client_credentials",
          {
            headers: {
              Authorization: `Basic ${credentials}`,
              "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
            }
          }
        );

        const bearerToken = responseToken.data.access_token;

        // Step 2: Use Bearer Token to get user details
        const responseUserDetails = await axios.get(
          `https://api.twitter.com/2/tweets/${username}`, // Use the correct endpoint for fetching user tweets
          {
            headers: {
              Authorization: `Bearer ${bearerToken}`
            }
          }
        );

        setUserDetails(responseUserDetails.data);
      } catch (error) {
        console.error("Error getting user details:", error.message);
      }
    };

    fetchData();
  }, [username]); // Add username to the dependency array to re-fetch when it changes

  return (
    <div style={{color: "white"}}>
      <h2>User Details</h2>
      {userDetails && <pre>{JSON.stringify(userDetails, null, 2)}</pre>}
      <div>{userDetails}</div>
    </div>
  );
};

export default TwitterProfileDetails;
