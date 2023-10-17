// $mkdir my-web
// $cd my-web
// $npm init
// $npm i express

const express = require('express')
const app = express()

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.listen(3000);

// $npm i -g express-generator
// $express my-web
// $cd my-web
// $npm i
// $npm start

// $npx express-generator my-web
// $cd my-web
// $npm i
// $npm start

var express = require('express');
// ...
// var app = express();

app.get('/', (req, res) => {
	res.send('GET /');
});
app.post('/', (req, res) => {
	res.send('POST /');
});
app.put('/', (req, res) => {
	res.send('PUT /');
});
app.delete('/', (req, res) => {
	res.send('DELETE /');
});
app.all('/all', (req, res) => {
	res.send('ANY /');
});

const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

module.exports = router;

// --- ./app.js
const userRouter = require('./routes/users');
// const app = express();

app.use('/users', userRouter);
//--- ./routes/users.js
const petRouter = require('./pets');
// const router = express.Router();

router.use('/pets', petRouter);

module.exports= router;