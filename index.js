const express = require('express');
const app = express();

const mongoose = require('mongoose');
require('dotenv/config');

const postRoutes = require('./routes/post');

app.use(express.json());
app.use('/posts', postRoutes);

mongoose.connect(
	process.env.DB_CONNECTION,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	() => {
		console.log('Database connected!');
	}
);

app.get('/', (req, res) => {
	res.send('We are home!');
});

app.listen(5000, () => console.log('Listening..'));
