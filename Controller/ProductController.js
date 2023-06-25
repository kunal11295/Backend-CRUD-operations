import ProductModals from "../modals/ProductModals.js";
import axios from "axios";

const fakestoreApiUrl = 'https://fakestoreapi.com/';


 export const createProduct = async (req, res) => {
    const { title, price, description, category, image,id,pin} = req.body;
    try {
        const response = await axios.post(`${fakestoreApiUrl}products`, {
            title,
            price,
            description,
            category,
            image,
            id,
            pin,
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};


export const getAllProducts = async (req, res) => {
    const{id,pin} = req.body
    try {
        const response = await axios.get(`${fakestoreApiUrl}products`,{
        id,
        pin,
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};


export const getProductById = async (req, res) => {
    const { id } = req.body;
    try {
        const response = await axios.get(`${fakestoreApiUrl}products/${id}`);
        res.json(response.data);
    } catch (error) {
        res.status(404).json({ error: 'Product not found' });
    }
};


export const  updateProduct = async (req, res) => {
    const { title, price, description, category, image,id} = req.body;
    try {
        const response = await axios.put(`${fakestoreApiUrl}products/${id}`, {
            title,
            price,
            description,
            category,
            image,
        });
        res.json(response.data);
    } catch (error) {
        res.status(404).json({ error: 'Product not found' });
    }
};


export const deleteProduct = async (req, res) => {
    const { id } = req.body;
    try {
        await axios.delete(`${fakestoreApiUrl}products/${id}`);
        res.send("Product deleted successfully")
    } catch (error) {
        res.status(404).json({ error: 'Product not found' });
    }
};
