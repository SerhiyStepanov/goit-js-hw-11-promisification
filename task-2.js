const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

// const toggleUserState = (allUsers, userName, callback) => {
//   const updatedUsers = allUsers.map(user =>
//     user.name === userName ? { ...user, active: !user.active } : user,
//   );

//   callback(updatedUsers);
// };

const toggleUserState = (allUsers,userName) => {
  const DELAY = 1000;

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(allUsers)
    }, DELAY)
  })
}

// const updatedUsers = allUsers.map(user =>
//     user.name === userName ? { ...user, active: !user.active } : user,
//   );

const logger = allUsers.map(user =>
  user.name === userName ? { ...user, active: !user.active } : user,
  console.table(logger)
  );


/*
 * Сейчас работает так
 */
toggleUserState(users, 'Mango', logger);
toggleUserState(users, 'Lux', logger);

/*
 * Должно работать так
 */
toggleUserState(users, 'Mango').then(logger);
toggleUserState(users, 'Lux').then(logger);