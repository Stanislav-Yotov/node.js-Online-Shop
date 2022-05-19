const User = require('../models/user.js');

exports.getLogin = (req, res, next) => {
    res.render('auth/login', {
        path: '/login',
        pageTitle: 'Login',
        isAuthenticated: false
    });
};

exports.postLogin = (req, res, next) => {
    User.findById('62839d6c53157464cda8e09b')
        .then(user => {
            req.session.isLoggedIn = true;
            req.session.user = user;
            res.redirect('/');
        })
};

exports.postLogout = (req, res, next) => {
    req.session.destroy(err => {
        console.log(err);
        res.redirect('/');
    })
};
