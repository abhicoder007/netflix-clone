const API_KEY="6665ed067492248fdb044450a0bb9020"
const request={
    fetchTrending:`/movie/top_rated?api_key=6665ed067492248fdb044450a0bb9020&language=en-US`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
};
// console.log(request.fetchTrending)
export default request;