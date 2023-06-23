const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model { }

Post.init(
  {
    id: {
      // ID -> primary key
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    post_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    post_contents: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    // post_id references primary_key of User
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        id: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'post',
  }
)

module.exports = Post;