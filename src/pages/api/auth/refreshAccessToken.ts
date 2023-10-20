const renewAccessToken = async (refreshToken) => {
  // Your Auth0 configuration
  const auth0Domain = process.env.AUTH0_ISSUER_BASE_URL;
  const auth0ClientId = process.env.AUTH0_CLIENT_ID;
  const auth0ClientSecret = process.env.AUTH0_CLIENT_SECRET;

  const response = await fetch(`https://${auth0Domain}/oauth/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      grant_type: "refresh_token",
      client_id: auth0ClientId,
      client_secret: auth0ClientSecret,
      refresh_token: refreshToken,
    }),
  });

  if (response.ok) {
    const data = await response.json();
    return data.access_token as string;
  } else {
    throw new Error("Failed to renew access token");
  }
};

export default renewAccessToken;
