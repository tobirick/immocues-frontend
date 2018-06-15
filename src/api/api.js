import axios from "axios";

const apiURL = process.env.API_URL;

export default {
  customers: {
    fetchAll: "",
    create: customer => {
      return axios
        .post(`${apiURL}/customers`, { customer })
        .then(response => response.data.customer);
    },
    update: "",
    delete: ""
  },
  objects: {
    fetchAll: "",
    create: "",
    update: "",
    delete: ""
  }
};
