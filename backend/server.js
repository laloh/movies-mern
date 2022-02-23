import express from 'express';
import cors from 'cors';
// import movies from './api/movies.route.js';
import movies from './api/movie.route.js'


const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1/movies', movies);
app.use('*', (req, res) => {
	res.status(404).json({error: 'Not found'})
})

export default app;