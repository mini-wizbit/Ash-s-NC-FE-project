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

// this find all possibilities of what categories are
export const getCategories = () => {
  return gamesApi.get("/categories").then(({ data }) => {
    return data.categories;
  });
};

//this is to sort the data
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
