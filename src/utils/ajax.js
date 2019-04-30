import axios from 'axios';
export default axios.create({
    baseURL: "http://47.106.147.88:7269/douban/"
    //baseURL: "https://1d56f619-47aa-4472-8cc5-199d2a3b3d81.mock.pstmn.io/douban/"
})