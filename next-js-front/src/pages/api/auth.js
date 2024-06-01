import axios from 'axios';

const BASE_URL = 'http://localhost:8000'; // Change this to your Django backend URL

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const response = await axios.post(`${BASE_URL}/dj-rest-auth/login/`, {
            email,
            password,
        });
        res.status(200).json(response.data);
    } catch (error) {
        res.status(error.response.status).json(error.response.data);
    }
};

const signup = async (req, res) => {
    const { email, password1, password2 } = req.body;
    try {
        const response = await axios.post(`${BASE_URL}/dj-rest-auth/registration/`, {
            email,
            password1,
            password2,
        });
        res.status(200).json(response.data);
    } catch (error) {
        res.status(error.response.status).json(error.response.data);
    }
};

export default (req, res) => {
    if (req.method === 'POST') {
        if (req.query.type === 'login') {
            return login(req, res);
        } else if (req.query.type === 'signup') {
            return signup(req, res);
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
};