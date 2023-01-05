const sequelize = require('../config/connection');
const { Post, User } = require('../models');

sequelize.sync({ force: true }).then( async () => {
    const user = await User.create({
        username: "jon",
        password: "lalalalalalalala"
    })

    console.log("Users seeded");

    await Post.bulkCreate ([{
        
    }])
});