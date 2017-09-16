const users = require('./userData.json');

module.exports = {
  getUsers: (req, res) => {
    let toReturn = [];
    if (req.query.age) {
      let age = req.query.age;
      for (let i = 0; i < users.length; i++) {
        if (users[i].age < age) {
          toReturn.push(users[i]);
        }
      }
      res.status(200).json(toReturn);
    }

    else if (req.query.lastname) {
      let lastName = req.query.lastname;
      for (let i = 0; i < users.length; i++) {
        if (users[i].last_name === lastName) {
          toReturn.push(users[i]);
        }
      }
      res.status(200).json(toReturn);
    }

    else if (req.query.email) {
      let email = req.query.email;
      for (let i = 0; i < users.length; i++) {
        if (users[i].email === email) {
          toReturn.push(users[i]);
        }
      }
      res.status(200).json(toReturn);
    }

    else if (req.query.favorites) {
      let favorites = req.query.favorites;
      for (let i = 0; i < users.length; i++) {
        for (let j = 0; j < users[i].favorites.length; j++) {
          if (users[i].favorites[j] === favorites) {
            toReturn.push(users[i]);
          }
        }
      }
      res.status(200).json(toReturn);
    }

    else {
      res.status(200).json(users);
    }
  }

  ,getUserById: (req, res) => {
    let id = JSON.parse(req.params.userId);
    let user = {};
    for (let i = 0; i < users.length; i++) {
      if (users[i].id === id) {
        user = users[i];
        res.status(200).json(user);
      }
    }
    res.status(404).json(null);
  }

  ,getAdmins: (req, res) => {
    let admins = [];
    for (let i = 0; i < users.length; i++) {
      if (users[i].type === 'admin') {
        admins.push(users[i]);
      }
    }
    res.status(200).json(admins);
  }
  ,getNonAdmins: (req, res) => {
    let nonAdmins = [];
    for (let i = 0; i < users.length; i++) {
      if (users[i].type !== 'admin') {
        nonAdmins.push(users[i]);
      }
    }
    res.status(200).json(nonAdmins);
  }

  ,getUserByType: (req, res) => {
    let userType = req.params.userType;
    let usersArray = [];
    for (let i = 0; i < users.length; i++) {
      if (users[i].type === userType) {
        usersArray.push(users[i]);
      }
    }
    res.status(200).json(usersArray);
  }

  ,updateUser: (req, res) => {
    let userId = JSON.parse(req.params.userId);
    let user = req.body;
    for (let i = 0; i < users.length; i++) {
      if (users[i].id === userId) {
        users[i] = user;
      }
    }
    res.status(200).json(users);
  }

  ,createUser: (req, res) => {
    let newUser = req.body;
    let usersCount = users.length;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.status(200).json(users);
  }

  ,deleteUser: (req, res) => {
    let userId = JSON.parse(req.params.userId);
    for (let i = 0; i < users.length; i++) {
      if (users[i].id === userId) {
        users.splice(i,1);
      }
    }
    res.status(200).json(users);
  }
};
