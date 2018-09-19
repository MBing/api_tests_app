import { githubToken as token } from '../tokens';

export const PROFILE_FETCHED = 'PROFILE_FETCHED';

export function fetchProfile () {
  return (dispatch) => {
    let header = new Headers({
      "Content-Type": "application/json",
      "Authorization": `token ${token}`
    });

    return fetch('https://api.github.com/users/mbing', {
      method: 'GET',
      headers: header
    })
      .then(response => response.json())
      .then(json => {
        dispatch(loadProfile(json));
      })
      .catch(error => {
        console.error(error);
      })
  }
}

export function saveProfile (profile) {
  return (dispatch) => {
    let header = new Headers({
      "Content-Type": "application/json",
      "Authorization": `token ${token}`
    });

    return fetch('https://api.github.com/user', {
      method: 'PATCH',
      headers: header,
      body: JSON.stringify(profile)
    })
      .then(response => response.json())
      .then(json => {
        dispatch(loadProfile(json));
      })
      .catch(error => {
        console.error(error);
      })
  }
}

export function loadProfile (results) {
  return {
    type: PROFILE_FETCHED,
    payload: results
  }
}
