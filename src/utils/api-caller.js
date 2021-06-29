import axios from 'axios';

// axios.defaults.withCredentials = true;

// axios.interceptors.response.use(function (response) {
//     return response;
//   }, function (error) {
//     const loginResponse = localStorage.getItem('loginResponse');
//     if(error.response && error.response.status === 401 && loginResponse) {
//       localStorage.removeItem('loginResponse');
//       window.location.reload();
//     }
//     return Promise.reject(error);
// });

export function setHeader(params) {
    const headers = {};
    const loginResponse = JSON.parse(localStorage.getItem('loginResponse')) || {};
    headers['authorization'] = `Bearer ${loginResponse.accessToken}`;
    headers['Acess-Control-Allow-Origin'] = '*';
    if(loginResponse['accessToken']) {
        headers['accessToken'] = loginResponse['accessToken'];
    }
    return headers;
}

export function getApi(endpoint, baseUrl = '', params = '') {
    return axios.get(baseUrl + endpoint + params, { headers: setHeader() });
}

export function postApi(endpoint, body, baseUrl = '', params = '') {
    return axios.post(baseUrl + endpoint + params, body, {
        headers: setHeader()
    });
}

export function deleteApi(endpoint, baseUrl = '', params = '') {
    return axios.delete(baseUrl + endpoint + params, {
        headers: setHeader()
    });
}

export function patchApi(endpoint, body, baseUrl = '', params = '') {
    return axios.patch(baseUrl + endpoint + params, body, {
        headers: setHeader()
    });
}