import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// Create Schema
const GameSchema = new Schema({
  // New
  status: String,
  updatedTs: Number,
  // From Scraper
  appId: String,
  url: String,
  title: String,
  minInstalls: Number,
  score: Number,
  ratings: Number,
  reviews: Number,
  free: Boolean,
  developerEmail: String,
  developerWebsite: String,
  genre: String,
  genreId: String,
  released: String,
  updated: String
});

export const Game = mongoose.model('Game', GameSchema);

export const GameDataKeys = [
  'appId',
  'url',
  'title',
  'minInstalls',
  'score',
  'ratings',
  'reviews',
  'free',
  'developerEmail',
  'developerWebsite',
  'genre',
  'genreId',
  'released',
  'updated'
];
