const axios = require("axios");

const gamesApi = axios.create({
  baseURL: "https://ashs-nc-games-project.herokuapp.com/api",
});

export const getReviews = (category) => {
  let queryStr = "/reviews";
  if (category) queryStr += `?category=${category}`;
  console.log(queryStr, "< is this right?");
  return gamesApi.get(queryStr).then(({ data }) => {
    console.log(data, "from api");
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
