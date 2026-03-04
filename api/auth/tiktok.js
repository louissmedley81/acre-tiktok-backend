export default function handler(req, res) {
    const clientKey = process.env.TIKTOK_CLIENT_KEY;
    const redirectUri = process.env.TIKTOK_REDIRECT_URI; // your vercel callback URL
    const state = Math.random().toString(36).slice(2);   // for demo; later store/verify
  
    const scope = [
      "user.info.basic",
      "video.list",
    ].join(",");
  
    const authUrl =
      "https://www.tiktok.com/v2/auth/authorize/?" +
      new URLSearchParams({
        client_key: clientKey,
        redirect_uri: redirectUri,
        response_type: "code",
        scope,
        state,
      }).toString();
  
    res.writeHead(302, { Location: authUrl });
    res.end();
  }