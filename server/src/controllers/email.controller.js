// import express from 'express';
// import { GamesProvider } from '../providers/games.provider';
// const Router = express.Router();

// const config = {
//   sender: 'x'
// };

// /**
//  * @description send email to game owner
//  */
// Router.post('/:id', async (req, res) => {
//   const { id } = req.params;
//   try {
//     const game = await GamesProvider.getGame(id);

//     res.sendStatus(200);
//   } catch (error) {
//     res.sendStatus(500);
//   }
// });

// export const GamesController = Router;
// //
