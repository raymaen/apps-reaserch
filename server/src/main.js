/* eslint-disable no-undef */
import express from "express";
import logger from "morgan";
import path from "path";
/* Controllers */
import ContactsController from "./controllers/contacts.controller";
import GamesController from "./controllers/games.controller";

const PORT = process.env.PORT || "5000";

const app = express();

// Body parser
app.use(express.json());

// Controllers
app.use("/games", GamesController);
app.use("/contacts", ContactsController);

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static(path.join(__dirname, "client", "build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.use(logger("dev"));

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
