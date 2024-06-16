const axios = require('axios');
const url2 = "http://localhost:8080/api/contributors/";

module.exports = {
    getContributors: async function () {
        let contributors = await axios.get(url2);
        return contributors.data
    },

    getContributor: async function (id) {
        let contributor = await axios.get(`${url2}${id}`);
        return contributor.data
    },

    createContributor: async function (contributor) {
        let newContributor = await axios.post(url2, contributor);
        return newContributor.data
    },

    deleteContributor: async function (id) {
        let contributor = await axios.delete(`${url2}${id}`);
        return contributor.data
    },

    updateContributor: async function (id, contributor) {
        let updatedContributor = await axios.put(`${url2}${id}`, contributor);
        return updatedContributor.data
    }
}