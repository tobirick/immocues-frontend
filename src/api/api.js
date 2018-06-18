import axios from "axios";

const apiURL = process.env.API_URL;

export default {
  user: {
    login: credentials => {
      return axios
        .post(`${apiURL}/users/login`, { credentials })
        .then(response => response.data);
    },
    validateToken: token => {
      return axios
        .post(`${apiURL}/users/validate_token`, { token })
        .then(response => response.data);
    },
    signUp: user => {
      return axios
        .post(`${apiURL}/users/signup`, { user })
        .then(response => response.data);
    },
    fetchAll: () => {
      return axios.get(`${apiURL}/users`).then(response => response.data.users);
    },
    delete: ""
  },
  customers: {
    fetchAll: () => {
      return axios
        .get(`${apiURL}/customers`)
        .then(response => response.data.customers);
    },
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
