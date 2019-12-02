/* eslint-disable no-undef */
import express from 'express';
import mongoose from 'mongoose';
import logger from 'morgan';
import { GamesController } from './controllers/games.controller';

const PORT = process.env.PORT || '5000';
const db = 'mongodb://localhost:27017/gplay';

const app = express();

app.use(express.json());
app.use(logger('dev'));
app.use('/api/games', GamesController);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('../../client/build'));
  app.get('*', (req, res) => {
    res.sendFile('../../client/build/index.html');
  });
}

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('DB connected succesfully!'))
  .catch(err => console.log('Db connection error', err));

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
