import axios from "axios";

const URL = "http://dummy.restapiexample.com/api/v1/employees";

export default {
    search: () => {
        return axios.get(URL);
    }
};