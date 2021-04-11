import apiClient from './client';

//get all articles
const getAll = async () => {
    try {
        const response = await apiClient.get('/news')

        if(response.data.success) {
            return response.data.news
        }
    } catch (error) {
        console.log('Une erreur est survenue lors de la récupération de tous les articles.', error.message);
        return [];
    }
}

//get articles by category
const getByCategory = async (category, qty) => {

    const endpoint = qty ? `/news/${category}/${qty}` : `/news/${category}`

    try {
        const response = await apiClient.get(endpoint);

        if(response.data.success) {
            return response.data.news
        }
    } catch (error) {
        console.log('Une erreur est survenue lors de la récupération des catégories.', error.message);
        return [];
    }
}

//get one specific article (by id)
const getSingle = async (id) => {
    try {
        const response = await apiClient.get(`/news/single/${id}`);

        if (response.data.success) {
            return response.data.news;
        }
    } catch (error) {
        console.log(`Une erreur est survenue lors de la récupération de l\'article ${id}`, error);
    }
};

const searchPost = async (query) => {
    if (!query) return {};
    try {
        const response = await apiClient.post(`/news/search/${query}`);
        return response.data;
    } catch (error) {
        console.log('Une erreur est survenue lors de la recherche', error);
    }
};

export default {
    getAll,
    getByCategory,
    getSingle,
    searchPost
};