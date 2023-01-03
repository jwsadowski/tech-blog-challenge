const router = require('express').Router()

// Create POST, PUT, and DELETE requests for comments on the dashboard

router.post('/dashboard', async (req, res) => {
    const comment = await comment.create(req.body.id)
})

router.put('/dashboard', async (req, res) => {
    const comment = await comment.update(req.body.id)
})

router.delete('/dashboard', async (req, res) => {
    const comment = await comment.destroy(req.body.id)
})