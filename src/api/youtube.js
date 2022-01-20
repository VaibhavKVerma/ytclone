import axios from "axios";

const KEY = "AIzaSyDVJas4OIShAEPYPQD3hT-TZ0jqUeIlxqw";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
