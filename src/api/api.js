import axios from "axios";

const apiURL = process.env.API_URL;

export default {
  customers: {
    create: customer => {
      return axios
        .post(`${apiURL}/customers`, { customer })
        .then(response => response.data.customer);
    }
  }
};
