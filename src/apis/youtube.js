import axios from "axios";

const KEY = "AIzaSyBIdpq7pe8i68e39KBqlpjOecwma9s6V8U";

//AIzaSyBIdpq7pe8i68e39KBqlpjOecwma9s6V8U
//AIzaSyBf-mBYkmKoyfGEBInvrtMxeZuMQBQGiho
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
