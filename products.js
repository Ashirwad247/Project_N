const fetchProducts = async () => {
    try {
        const url = 'https://dummyjson.com/products';
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

module.exports = { fetchProducts };