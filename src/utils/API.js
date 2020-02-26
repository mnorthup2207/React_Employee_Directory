import axios from "axios";

const URL = "https://dummy.restapiexample.com/api/v1/employees";

export default {
    search: () => {
        return axios.get(URL);
    }
};