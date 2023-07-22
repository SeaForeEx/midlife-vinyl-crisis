import { clientCredentials } from '../client';

const getOrderByUid = (uid) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/orders`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const shoppingCart = Object.values(data).filter((item) => item.user.uid === uid);
      resolve(shoppingCart);
    })
    .catch(reject);
});

export default getOrderByUid;
