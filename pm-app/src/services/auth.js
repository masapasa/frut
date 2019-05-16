// const axios = require('axios')
import axios from "axios";

const service = axios.create({
  baseURL: (process.env.REACT_APP_HEROKU_URL || "http://localhost:5000") + "/api",
  withCredentials: true
});

const signup = (username, password, email, imgPath) => {
  return service
    .post("/signup", { username, password, email, imgPath })
    .then(response => response.data);
};

const login = (username, password) => {
  return service
    .post("/login", { username, password })
    .then(response => response.data);
};

const logout = () => {
  return service.get("/logout").then(response => response.data);
};

const loggedin = () => {
  return service.get("/loggedin").then(response => response.data);
};

const getUsers = () => {
  return service
    .get('/users')
    .then(response => response.data);
}
const upload = data => {
  return service.post("/upload", data).then(response => response.data)
}
const getProject = () => {
  return service.get('/userprojects').then(res => res.data)
}
const getIssues = (type) => {
  return service.get(`/issues?type=${type}`).then(res => res.data)
}
export { signup, login, logout, loggedin, getUsers, upload, getProject, getIssues };
