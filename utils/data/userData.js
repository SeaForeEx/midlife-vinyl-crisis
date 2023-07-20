import { clientCredentials } from '../client';

const endpoint = clientCredentials.databaseURL;

const createUser = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/users.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve((data)))
    .catch(reject);
});

const getSingleUser = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/users/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve((data)))
    .catch(reject);
});

const getUser = (uid) =>
  new Promise((resolve, reject) => {
    // Make a GET request to the Firebase Realtime Database to retrieve user data that matches the `uid` value
    fetch(`${endpoint}/users.json?orderBy="uid"&equalTo="${uid}"`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      // Parse the response body as JSON
      .then((response) => response.json())
      // If data is found for the given `uid`, resolve the Promise with the first user object found in the data, otherwise resolve with null
      .then((data) => {
        const userArray = Object.values(data);
        const user = userArray.length ? userArray[0] : null;
        resolve(user);
      })
      .catch(reject);
  });


const getUsers = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/users`, {
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

const updateUser = (payload) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/users/${payload.id}.json`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve((data)))
    .catch(reject);
});

const viewUserDetails = (id) => new Promise((resolve, reject) => {
  Promise.all([getSingleUser(id)])
    .then(([userObject]) => {
      resolve({ ...userObject });
    }).catch((error) => reject(error));
});

// const getUserPosts = (uid) => new Promise((resolve, reject) => {
//   fetch(`${clientCredentials.databaseURL}/posts`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       const usersPosts = Object.values(data).filter((item) => item.rare_user_id.uid === uid);
//       resolve(usersPosts);
//     })
//     .catch(reject);
// });

// const viewUserPosts = (id) => new Promise((resolve, reject) => {
//   Promise.all([getSingleUser(id), getUserPosts(id)])
//     .then(([userObject, userPostsArray]) => {
//       resolve({ ...userObject, posts: userPostsArray });
//     })
//     .catch((error) => reject(error));
// });

export {
  getUsers,
  getSingleUser,
  getUser,
  createUser,
  updateUser,
  viewUserDetails,
};
