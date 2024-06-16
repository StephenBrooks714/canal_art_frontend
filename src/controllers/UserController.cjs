const axios = require('axios');
const url3 = 'http://localhost:8080/api/users';

exports.getUsers = async (req, res) => {
    try {
        const { data } = await axios.get(url3);
        res.send(data);
    } catch (error) {
        res.send(error);
    }
}

exports.createUser = async (req, res) => {
    try {
        const { data } = await axios.post(url3, req.body);
        res.send(data);
    } catch (error) {
        res.send(error);
    }
}

exports.updateUser = async (req, res) => {
    try {
        const { data } = await axios.put(url3, req.body);
        res.send(data);
    } catch (error) {
        res.send(error);
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const { data } = await axios.delete(url3, req.body);
        res.send(data);
    } catch (error) {
        res.send(error);
    }
}
