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
    update: (id, user) => {
      return axios
        .put(`${apiURL}/users/${id}`, { user })
        .then(response => response.data);
    },
    delete: id => {
      return axios
        .delete(`${apiURL}/users/${id}`)
        .then(response => response.data);
    }
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
    update: (id, customer) => {
      return axios
        .put(`${apiURL}/customers/${id}`, { customer })
        .then(response => response.data);
    },
    delete: id => {
      return axios
        .delete(`${apiURL}/customers/${id}`)
        .then(response => response.data);
    }
  },
  objects: {
    fetchAll: "",
    create: "",
    update: "",
    delete: ""
  }
};
