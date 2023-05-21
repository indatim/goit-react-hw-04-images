import axios from 'axios';

const key = '34822539-414af7ceff62fba527da96994';
const image_type = 'photo';
const orientation = 'horizontal';

axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
  key,
  image_type,
  orientation,
  per_page: 12,
};

async function fetchImages(requestKey, page) {
  try {
    const { data } = await axios({
      params: {
        q: requestKey,
        page,
      },
    });
    return data.hits;
  } catch (error) {
    new Error('No response from server');
  }
}

const api = { fetchImages };

export default api;