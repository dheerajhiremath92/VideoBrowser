import axios from "axios";
const KEY = "AIzaSyCgta5oemX_Y4zAxGauLJ8acRjcF0dkyQE";

export default axios.create({
  baseURL: " https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
