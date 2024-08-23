import axios from "axios";

axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.baseURL = "https://back-site.farshbaf-dev.ir/api"
axios.interceptors.request.use((req) => {
    req.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
    return req;
}, null);


axios.interceptors.response.use(
    res => {
        return res
    },
    err => {
        // console.log(err)
        // console.log(err.response.status)
        return Promise.reject(err.response);
    }
)
export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
    patch: axios.patch
};