const { userInfo } = require("os");
const Post = require("./Post");
const User = require("./User");

// associations 
User.hasMany(Post, {
    foreignKey: "user_id"
})

Post.belongsTo(User, {
    foreignKey: "user_id"
})

module.exports = { Post, User }