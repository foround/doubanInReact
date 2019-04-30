import axios from 'axios';
export default axios.create({
    baseURL: "http://47.106.147.88:7269/douban/"
    //baseURL: "https://29110419-0b96-47a6-9ae9-8829c26fdc60.mock.pstmn.io/douban/"
})