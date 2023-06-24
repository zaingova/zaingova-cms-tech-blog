// import sequelize, User model and userData.json
const sequelize = require("../config/connection");
const { Post } = require("../models");
const { User } = require("../models");
const { Comment } = require("../models");
const seedData = require("./seedData.json");
const seedUser = require('./userData.json');
const commentData = require('./commentData.json');

// Store the data in userData.json and dishData.json in the User model
// uses each json file in this folder to bulk create a few instances of each model
const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  await User.bulkCreate(seedUser, {
    individualHooks: true,
    returning: true,
  });
  await Post.bulkCreate(seedData, {
    individualHooks: true,
    returning: true,
  });
  await Comment.bulkCreate(commentData, {
    individualHooks: true,
    returning: true,
  });
  process.exit(0);
};

seedDatabase();