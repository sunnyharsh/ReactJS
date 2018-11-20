import axios from 'axios';

export async function getPageData(url) {
    return await axios.get('https://httpbin.org/get')
    .then(function (response) {
        return response;
    })
    .catch(function (err) {
        //response err;
    });
}