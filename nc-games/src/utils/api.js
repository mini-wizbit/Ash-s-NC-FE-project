const axios = require("axios");

const gamesApi = axios.create({
  baseURL: "https://ashs-nc-example-games.herokuapp.com/api",
});

export const getReviews = (param) => {
  return gamesApi
    .get("/reviews", {
      params: {
        category: param,
      },
    })
    .then(({ data }) => {
      return data;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
};

export const getCategories = () => {
  return gamesApi.get("/categories").then(({ data }) => {
    return data.categories;
  });
};
export const getReviewById = (review_id) => {
  return gamesApi
    .get(`reviews/${review_id}`)
    .then(({ data }) => {
      return data.review;
    })
    .catch((error) => {
      console.log(error, "< axios error");
      return error;
    });
};

export const voteUpdate = (review_id, inc_votes) => {
  return gamesApi
    .patch(`reviews/${review_id}`, { inc_votes })
    .then(({ data }) => {
      return data.review;
    });
};

export const commentsById = (review_id) => {
  return gamesApi
    .get(`/reviews/${review_id}/comment`)
    .then(({ data }) => {
      //</comments the s is needed but trying to test errors
      return data.comments;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
};

export const commentPost = (review_id, comment) => {
  console.log(comment, "<< this");
  return gamesApi
    .post(`/reviews/${review_id}/comment`, comment) //</comments the s is needed but trying to test errors
    .then(({ data }) => {
      return data;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
};

export const reviewsByQueries = (theCategory, sortByValue, orderByValue) => {
  return gamesApi
    .get("/reviews", {
      params: {
        category: theCategory,
        sort_by: sortByValue,
        order: orderByValue,
      },
    })
    .then(({ data }) => {
      return data.reviews;
    });
};
