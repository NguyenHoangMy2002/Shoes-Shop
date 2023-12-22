import axiosClient from "../axiosClient";


const apiAddItem = {
    putAddItem(data) {
        const url = '/api/cart/add';
        return axiosClient.put(url, data);
    },
};
export default apiAddItem;
