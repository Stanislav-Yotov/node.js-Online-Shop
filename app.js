const express = require('express');
const bodyParser = require('body-parser');
const adminRouter = require('./routes/admin.js');
const shopRouter = require('./routes/shop.js');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/admin', adminRouter);
app.use(shopRouter);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', 'page-not-found.html'));
});

app.listen(3000);