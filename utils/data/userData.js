import { clientCredentials } from '../client';

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

const getUserByUid = (uid) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/users.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
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

const updateUserProfile = (payload) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/users/${payload.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
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
  getUserByUid,
  updateUserProfile,
  viewUserDetails,
};
