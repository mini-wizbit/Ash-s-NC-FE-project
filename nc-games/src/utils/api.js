const axios = require("axios");

const gamesApi = axios.create({
  baseURL: "https://ashs-nc-games-project.herokuapp.com/api",
});

export const getReviews = () => {
  return gamesApi.get(`/reviews`).then(({ data }) => {
    return data;
  });
};
