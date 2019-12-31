import axios from 'axios'

const API_KEY = 'AIzaSyBXx9KmXt_1AqddB4R7vTJ4JP8I9WcCBhY'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    type: 'video',
    key: API_KEY
  }
})
