import express from "express";

const Router = express.Router();

Router.post("/new", (req, res) => {
  const id = req.body.id;

  try {
    // add new game
    // scrape for game
    // save in db
    res.status(200);
  } catch (error) {
    res.status(400);
  }
});

Router.get("/data", (req, res) => {
  try {
    // get all game data
    res.status(200);
  } catch (error) {
    res.status(400);
  }
});

Router.get("/data/:id", (req, res) => {
  try {
    // get game data
    res.status(200);
  } catch (error) {
    res.status(400);
  }
});

export default Router;
