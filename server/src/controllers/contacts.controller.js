import express from "express";

const Router = express.Router();

Router.post("/update-status", (req, res) => {
  const id = req.body.id;

  try {
    // mogoose stuff
    // set contact status
    res.status(200);
  } catch (error) {
    res.status(400);
  }
});

export default Router;
