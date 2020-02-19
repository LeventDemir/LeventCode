const express = require('express')
const Work = require('../models/work')
const admin = require('../middleware/admin')
const router = express.Router()


router.post('/create', admin, (req, res) => {
    const data = req.body

    new Work(data).save(err => {
        if (!err) {
            res.json({ success: true })
        } else {
            res.json({ success: false })
        }
    })
})


router.post('/update', admin, (req, res) => {
    const data = req.body

    Work.findOne({ _id: data.id }, (err, work) => {
        if (work) {
            work.title = data.title
            work.description = data.description
            work.photo = data.photo

            work.save(err => {
                if (!err) {
                    res.json({ success: true })
                } else {
                    res.json({ success: false })
                }
            })
        } else {
            res.json({ success: false })
        }
    })
})


router.post('/delete', admin, (req, res) => {
    Work.findOne({ _id: req.body.id }, (err, work) => {
        if (work) {
            work.remove(err => {
                if (!err) {
                    res.json({ success: true })
                } else {
                    res.json({ success: false })
                }
            })
        } else {
            res.json({ success: false })
        }
    })
})


router.get('/works', (req, res) => {
    Work.find({}, (err, works) => {
        if (works) {
            res.json(works)
        } else {
            res.json({ success: false })
        }
    }).sort({ $natural: -1 })
})


router.get('/work', (req, res) => {
    Work.findOne({ _id: req.query.id }, (err, work) => {
        if (work) {
            res.json(work)
        } else {
            res.json({ success: false })
        }
    })
})


module.exports = router;