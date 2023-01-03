const { Model, DataTypes } = require('sequelize');
const sequelize = require('./config/connection');

class Post extends Model {}

Post.init(
    {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        contents: {
            type: DataTypes.STRING,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        id: {
            type: DataTypes.INTERGER,
            allowNull: false,
            primaryKey: true,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'post'
    }
);

modiule.exports = Post;