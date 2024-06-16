const axios = require('axios');
const url1 = 'http://localhost:8080/api/programs';

module.exports = {
    async index(req, res) {
        const programs = await axios.get(url1);
        res.send(programs.data);
    },

    async show(req, res) {
        const program = await axios.get(`${url1}/${req.params.id}`);
        res.send(program.data);
    },

    async store(req, res) {
        const program = await axios.post(url1, req.body);
        res.send(program.data);
    },

    async update(req, res) {
        const program = await axios.put(`${url1}/${req.params.id}`, req.body);
        res.send(program.data);
    },

    async destroy(req, res) {
        const program = await axios.delete(`${url1}/${req.params.id}`);
        res.send(program.data);
    }
}