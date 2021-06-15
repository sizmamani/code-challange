const axios = require('axios');
const { baseUrl } = require('../config/');
const logger = require('../logger');

module.exports = {
  getBlocks: async () => {
    return await axios
      //TODO: date parameter should be dynamic. (send it as param)
      .get(
        `${baseUrl}/blocks/${new Date(
          new Date().setDate(new Date().getDate() - 1)
        ).getTime()}?format=json`
      )
      .then((response) => {
        return response.data.blocks || [];
      })
      .catch((error) => {
        logger.error(error);
      });
  },
  getBlockDetail: async (hash) => {
    return await axios.get(`${baseUrl}/rawblock/${hash}`)
    .then(response => response.data)
    .catch((error) => {
        logger.error(error);
    });
  },
};
