import axiosClient from '../axiosClient';

const apiFilerPrice = {
    getFilerPrice(price) {
        const url = `/api/products/?color=&size=&minPrice=0&maxPrice=10000000&minDiscount=0&brand=&stock=null&sort=${price}&pageNumber=0&pageSize=10`;
        return axiosClient.get(url);
    },
};
export default apiFilerPrice;
