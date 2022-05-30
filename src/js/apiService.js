import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api';
const MY_KEY = 'key=21849965-5d080cd355a76516303a4dd69';

export async function requestToServer(value, page) {
  return await axios(
    `?${MY_KEY}&q=${value}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=40`,
  );
}