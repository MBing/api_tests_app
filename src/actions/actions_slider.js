import { unsplashToken as token } from '../tokens';

export const SLIDES_FETCHED = 'SLIDES_FETCHED';

export function fetchSlides () {
  return (dispatch) => {
    let header = new Headers({
      "Content-Type": "application/json",
      "Authorization": `Client-ID ${token}`
    });

    return fetch('https://api.unsplash.com/photos', {
      method: 'GET',
      headers: header
    })
      .then(response => response.json())
      .then(json => {
        dispatch(loadSlides(json));
      })
      .catch(error => {
        console.error(error);
      })
  }
}

export function loadSlides (results) {
  return {
    type: SLIDES_FETCHED,
    payload: results
  }
}
