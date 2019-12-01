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
  headerImage: String,
  title: String,
  description: String,
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
  'headerImage',
  'title',
  'description',
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
