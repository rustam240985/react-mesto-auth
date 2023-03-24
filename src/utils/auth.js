export const checkResponse = (res) => {
  if (res.ok) {
    return res.json()
  }
  return Promise.reject(res.status)
}

export const request = (url, options) => {
  return fetch(url, options).then(checkResponse)
}


export const BASE_URL = 'https://auth.nomoreparties.co';

export const register = (password, email) => {
  return request(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ password, email })
  })
};


export const authorize = (password, email) => {
  return request(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ password, email })
  })
};


export const checkToken = (token) => {
  return request(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  })
}