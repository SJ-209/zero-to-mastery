const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');


const app = express();

// Body parser //

app.use(bodyParser.json());

// Database //

const database = {
    users: [
        {
            id: '123',
            name: 'John',
            email: 'john@gmail.com',
            password: 'cookies',
            entries: 0,
            joined: new Date()
        },
        {
            id: '124',
            name: 'Sally',
            email: 'sally@gmail.com',
            password: 'bananas',
            entries: 0,
            joined: new Date()
        }
    ],
    login: [
        {
            id: '987',
            hash: '',
            email: 'john@gmail.com'
        }
    ]
}


// Root //

app.get('/', (req, res)=> {
    res.send(database.users);
})

// Signin //

app.post('/signin', (req, res) => {
    bcrypt.compare("apples", '$2a$10$T0J/loH6xKFShxj0GDfco.DbN6E5mUABPuB9vMy3Ql41WUPlpDsFi', function(err, res) {
        console.log('first guess', res)
    });
    bcrypt.compare("veggies", '$2a$10$T0J/loH6xKFShxj0GDfco.DbN6E5mUABPuB9vMy3Ql41WUPlpDsFi', function(err, res) {
        console.log('second guess', res)
    });
    if(req.body.email === database.users[0].email &&
        req.body.password === database.users[0].password) {
            res.json('success');
        } else {
            res.status(400).json('error logging in');
        }
})

// Register //

app.post('/register', (req, res) => {
    const {email, name, password} = req.body;
    database.users.push({
        id: '125',
        name: name,
        email: email,
        password: password,
        entries: 0,
        joined: new Date()
    })
    res.json(database.users[database.users.length-1]);
})

// Profile //

app.get('/profile/:id', (req, res) => {
    const { id } = req.params;
    let found = false;
    database.users.forEach(user => {
        if(user.id === id) {
            found = true;
            return res.json(user);
        } 
    })
    if(!found) {
        res.status(400).json('not found');
    }
})

// Image //

app.put('/image', (req, res) => {
    const { id } = req.body;
    let found = false;
    database.users.forEach(user => {
        if(user.id === id) {
            found = true;
            user.entries++
            return res.json(user.entries);
        } 
    })
    if(!found) {
        res.status(400).json('not found');
    }
})

// Bcrypt //

// bcrypt.hash("bacon", null, null, function(err, hash) {
//     // Store hash in your password DB.
// });

// // Load hash from your password DB.
// bcrypt.compare("bacon", hash, function(err, res) {
//     // res == true
// });
// bcrypt.compare("veggies", hash, function(err, res) {
//     // res = false
// });

app.listen(3000, () => {
    console.log('app is running on port 3000');
})

