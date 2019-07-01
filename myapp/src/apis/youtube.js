import axios from 'axios';

const KEY =  "AIzaSyDhiLP8LGNUnN8XY7iAB6LGCaLrdquo8YQ";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  // list of params we want to add onto request
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
