const API_KEY = '34822539-414af7ceff62fba527da96994';
const BASE_URL = 'https://pixabay.com/api/';

function fetchImages(requestKey, page) {
  const url = `${BASE_URL}?q=${requestKey}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
  return fetch(url).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error('No response from server'));
  });
}

const api = { fetchImages };

export default api;