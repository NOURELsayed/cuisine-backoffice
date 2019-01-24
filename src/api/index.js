import axios from 'axios'
const APINAME = 'http://192.168.100.131:8000/api/v1/'

export const getTable = (model, api, params) => {


    return new Promise((resolve, reject) => {
        axios.get(APINAME + `${model}/${api}`, { params })
            .then((response) => {
                // console.log(response.data.results);
                resolve(response.data.results)
            })
            .catch(function (error) {
                // console.log(error);
            });
    });

}

export const postTable = (model, api, data) => {


    return new Promise((resolve, reject) => {

        axios.post(APINAME + `${model}/${api}/`, data)
            .then((response) => {
                resolve(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    });

}

export const patchRecord = (model, api, id, data) => {


    return new Promise((resolve, reject) => {

        axios.patch(APINAME + `${model}/${api}/${id}/`, data)
            .then((response) => {
                alert(JSON.stringify(response.data))
                resolve(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    });

}