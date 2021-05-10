import apiClient from './client';

//get all thrift stores
const getAll = async () => {
    try {
        const response = await apiClient.get('/thrift')

        if(response.data.success) {
            return response.data.thrift;
        }
    } catch (error) {
        console.log('Une erreur est survenue lors de la récupération de toutes les friperies.', error.message);
        return [];
    }
}

//get thrift stores by city
const getThriftByCity = async (city, qty) => {
    const endpoint = qty ? `/thriftCity/${city}/${qty}` : `/thriftCity/${city}`;

    try {
        const response = await apiClient.get(endpoint);

        if (response.data.success) {
            return response.data.thrift;
        }
    } catch (error) {
        console.log('Une erreur est survenue lors de la récupération des friperies par ville.', error.message);
        return [];
    }
}

//get thrift stores by city
const getThriftByStyle = async (style, qty) => {
    const endpoint = qty ? `/thriftStyle/${style}/${qty}` : `/thriftStyle/${style}`;

    try {
        const response = await apiClient.get(endpoint);

        if (response.data.success) {
            return response.data.thrift;
        }
    } catch (error) {
        console.log('Une erreur est survenue lors de la récupération des friperies par style.', error.message);
        return [];
    }
}

//get one specific thrift store (by id)
const getSingle = async (id) => {
    try {
        const response = await apiClient.get(`/thrift/single/${id}`);

        if (response.data.success) {
            return response.data.thrift;
        }
    } catch (error) {
        console.log(`Une erreur est survenue lors de la récupération de la friperie ${id}`, error);
    }
};

const searchThriftStore = async (query) => {
    if (!query) return {};
    try {
        const response = await apiClient.post(`/thrift/search/${query}`);
        return response.data;
    } catch (error) {
        console.log('Une erreur est survenue lors de la recherche', error);
    }
};

export default {
    getAll,
    getThriftByCity,
    getThriftByStyle,
    getSingle,
    searchThriftStore
};