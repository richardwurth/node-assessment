/* Required Files */

const express = require('express');
const bodyParser = require('body-parser');
const usersCtrl = require('./usersCtrl.js');
const app = express();
const port = 3000;

app.use(bodyParser.json());

/* Below are the Get requests */

app.get('/api/users', usersCtrl.getUsers);
app.get('/api/users/:userId', usersCtrl.getUserById);
app.get('/api/admins', usersCtrl.getAdmins);
app.get('/api/nonadmins', usersCtrl.getNonAdmins);
app.get('/api/user_type/:userType', usersCtrl.getUserByType);

/* Below is the Put request */

app.put('/api/users/:userId', usersCtrl.updateUser);

/* Below is the Post request */

app.post('/api/users', usersCtrl.createUser);

/* Below is the Delete request */

app.delete('/api/users/:userId', usersCtrl.deleteUser);

/* Below is the Port Listening section */

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});
