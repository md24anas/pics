import axios from 'axios';

const searchImages = async () => {
   const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID 8H42JDJMG0M2PzF-JsDmqpbMOE3tnRI9WetX59_OYuY',
        },
        params: {
            query: 'cars'
        },
    });
    
    return response.data.results;
};
export default searchImages;