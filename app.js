const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const User = require('./models/user');
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const user = require('./models/user');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  User.findById('62839d6c53157464cda8e09b')
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoose
.connect('mongodb+srv://@node-complete.u7g5c.mongodb.net/Node-Complete?retryWrites=true&w=majority')
.then(result => {
  User.findOne().then(user => {
    if (!user) {
      const user = new User({
        name: 'Stancho',
        email: 'stancho@abv.bg',
        cart: {
          items: []
        }
      });
      user.save();
    }
  })
  
  app.listen(3000);
})
.catch(err => {
  console.log(err);
});

