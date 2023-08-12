import axios from "axios";
const instance=axios.create({
    baseURL:`https://api.themoviedb.org/3`,
})
// https://api.themoviedb.org/3/movie/top_rated?api_key=6665ed067492248fdb044450a0bb9020&language=en-US
// 'https://api.themoviedb.org/3/treding/all/week?api_key=6665ed067492248fdb044450a0bb9020&language=en-US'

export default instance;