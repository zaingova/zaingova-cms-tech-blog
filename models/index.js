const Comment = require('./Comment');
const Post = require('./Post');
const User = require('./User');

// user has many posts; when user is deleted so are their posts
User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

// user has many comments; when user is deleted so are their comments
User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

// posts have many comments; when posts are deleted so are their comments
Post.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
})

// posts belong to users
Post.belongsTo(User, {
  foreignKey: 'user_id',
});

// comments belong to users
Comment.belongsTo(User, {
  foreignKey: 'user_id',
});

// comments also belong to posts
Comment.belongsTo(Post, {
  foreignKey: 'user_id',
});

module.exports - {
  Comment,
  Post,
  User,
};