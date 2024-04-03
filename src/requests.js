const apiKey = "09bad1b9cf8ef4d7c6985c269818c2a0";

const requests = {
  discover_popular: `/discover/movie?api_key=${apiKey}&sort_by=popularity.desc`,
  discover_kids: `/discover/movie?api_key=${apiKey}&certification_country=US&certification.lte=G&sort_by=popularity.desc`,
  discover_drama: `/discover/movie?api_key=${apiKey}&with_genres=878&with_cast=500&sort_by=vote_average.desc`,
};

export default requests;
