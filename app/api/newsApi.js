import apiClient from './client';

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

export default {
    getAll,
    getByCategory
};