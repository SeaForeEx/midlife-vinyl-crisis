import { clientCredentials } from '../client';

const getAllSellers = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/sellers`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const getSellerById = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/sellers/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve((data)))
    .catch(reject);
});

export {
  getAllSellers, getSellerById,
};
