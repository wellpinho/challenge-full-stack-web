import axios from "axios";

const pathList = "http://localhost:4000/users";

export const getStudents = ({ commit }) => {
  axios.get(pathList).then((response) => {
    console.log(response.data);
    commit("SET_STUDENTS", response.data);
  });
};
