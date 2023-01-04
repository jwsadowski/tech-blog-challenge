const router = require('express').Router()

// Create POST, PUT, and DELETE requests for comments on the dashboard

router.post('/dashboard', async (req, res) => {
    const comment = await comment.create(req.body.id)
    if (comment) {
        res.json({ message: "create a comment"})
    }
});

router.put('/dashboard', async (req, res) => {
    const comment = await comment.update(req.body.id)
    if (comment) {
        res.json({ message: "update a comment"})
    }
});

router.delete('/dashboard', async (req, res) => {
    const comment = await comment.destroy(req.body.id)
    if (comment) {
        res.json({ message: "delete a comment"})
    }
});

module.exports = router;