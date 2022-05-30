let users = [];
export const getUser = (req, res) => {
  res.send(users);
};
export const createUser = (req, res) => {
  const user = req.body;
  users.push(user);

  res.send(`User with the id ${user.login} added to the database`);
};
export const getUserId = (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user.id === id);
  res.send(foundUser);
};
export const deleteUser = (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user.id === id);
  foundUser.isDeleted = true;
  res.send(foundUser);
};
export const updateUser = (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id === id);
  const { login, password, age, isDeleted } = req.body;
  if (login) {
    user.login = login;
  }
  if (password) {
    user.password = password;
  }
  if (age) {
    user.age = age;
  }
  if (isDeleted) {
    user.isDeleted = isDeleted;
  }

  res.send(`User with the id ${id} has been updated`);
};
