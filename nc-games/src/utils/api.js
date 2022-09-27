const axios = require("axios");

const gamesApi = axios.create({
  baseURL: "https://ashs-nc-games-project.herokuapp.com/api",
});

export const getReviews = (category) => {
  let queryStr = "/reviews";
  if (category) queryStr += `?category=${category}`;
  return gamesApi.get(queryStr).then(({ data }) => {
    return data;
  });
};

export const getCategories = () => {
  return gamesApi.get("/categories").then(({ data }) => {
    return data.categories;
  });
};

export const getReviewsByCategories = (category) => {
  return gamesApi.get(`/reviews?category=${category}`).then(({ data }) => {
    return data.reviews;
  });
};

export const getReviewById = (review_id) => {
  return gamesApi.get(`reviews/${review_id}`).then(({ data }) => {
    return data.game;
  });
};

export const voteUpdate = (review_id, votes) => {
  return gamesApi.patch(`reviews/${review_id}`, { votes }).then(({ data }) => {
    return data.review;
  });
};
