import axios from 'axios';

function shorteningClient() {
  return {
    getShorteningLink: async function (url) {
      try {
        const final = await axios.get(`https://api.shrtco.de/v2/shorten?url=${url}`);
        return final.data.result;
      } catch (err) {
        throw new Error(err);
      }
    },
  };
}

export { shorteningClient };
