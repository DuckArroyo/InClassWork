const Post = require("./post");
const Author = require("./author");

Post.belongsTo(Author);
// Create a relationship that instructs Posts to belong to Authors

Author.hasMany(Post);
// Create a relationship that instructs Authors that it has many Posts

module.exports = { Post, Author };
