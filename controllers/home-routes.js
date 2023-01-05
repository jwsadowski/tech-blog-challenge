const router = require('express').Router();
const { Post } = require('../models')

// GET all posts for homepage
router.get('/', async (req, res) => {
    try {
       //  const Post = await Post.findAll({
            console.log("routehit")
       // });

        res.render('homepage')


    

        // req.session.save(() => {
        //     if (req.session.countVisit) {
        //         req.session.countVisit++
        //     } else {
        //         req.session.countVisit = 1;
        //     }

        //     res.render('/', {
        //         Post,
        //         countVisit: req.session.countVisit,
        //     });
        // });
    } catch (err) {
        res.status(500).json(err);
    }
});

// Make a route to get the Dashboard and include the necessary req.session code 


// Find all posts for the dashboard
router.get('/dashboard', async (req, res) => {
    try {
        // const Post = await Post.findAll({
           
        // })
        res.render('dashboard')
    } catch (err) {
        res.status(500).json(err);
    }
})

// Make a route for the logout page where a user can log out and include the necessary req.session code
router.get('/logout', async (req, res) => {

        res.render('logout')
});

module.exports = router;

