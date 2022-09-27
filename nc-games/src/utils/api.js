const axios = require("axios");

const gamesApi = axios.create({
  baseURL: "https://ashs-nc-games-project.herokuapp.com/api",
});

export const getReviews = (param) => {
  if (param) {
    return gamesApi
      .get("/reviews", {
        params: {
          category: param,
        },
      })
      .then(({ data }) => {
        return data;
      });
  } else {
    return gamesApi.get("/reviews").then(({ data }) => {
      return data;
    });
  }
};

export const getCategories = () => {
  return gamesApi.get("/categories").then(({ data }) => {
    return data.categories;
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
