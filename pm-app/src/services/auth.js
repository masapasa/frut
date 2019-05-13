// const axios = require('axios')
import axios from "axios";

const service = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true
});

const signup = (username, password, email) => {
  return service
    .post("/signup", { username, password, email })
    .then(response => response.data);
};

const login = (username, password) => {
  return service
    .post("/login", { username, password })
    .then(response => response.data);
};

const logout = () => {
  return service.post("/logout").then(response => response.data);
};

const loggedin = () => {
  return service.get("/loggedin").then(response => response.data);
};

const getUsers = () => {
return service
.get('/users')
.then(response => response.data);
}
export { signup, login, logout, loggedin, getUsers };
