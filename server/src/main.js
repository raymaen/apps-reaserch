/* eslint-disable no-undef */
import express from 'express';
import logger from 'morgan';
import path from 'path';
import { GamesController } from './controllers/games.controller';

const PORT = process.env.PORT || '5000';

const app = express();

app.use(express.json());
app.use('/games', GamesController);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client', 'build')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.use(logger('dev'));

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
