const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
    MongoClient.connect('mongodb+srv://Stancho:nodecomplete@node-complete.u7g5c.mongodb.net/mongoDatabase?retryWrites=true&w=majority')
        .then(client => {
            console.log('Connected');
            callback(client);
        })
        .catch(err => console.log(err));
};

module.exports = mongoConnect;