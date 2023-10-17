const express = require('express')
const app = express();

app.get('/', (req, res) => {
	res.send('Hello World! blahblah');
});

app.listen(3000, () => {
	console.log('SERVER STARTED');
});
