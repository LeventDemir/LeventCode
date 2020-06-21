const express = require('express')
const bcrypt = require('bcryptjs')
const Admin = require('../models/admin')
const router = express.Router()


// create token
const createToken = () => {
    const letters = [...Array(52).keys()].map(i =>
        i > 25 ? String.fromCharCode(i + 71) : String.fromCharCode(i + 65)
    );

    let token = "";

    for (let x = 0; x < 100; x++) {
        token += letters[Math.floor(Math.random() * letters.length)];
    }

    return token;
}


router.post('/login', (req, res) => {
    const data = req.body

    Admin.findOne({ username: data.username }, (err, admin) => {
        if (admin) {
            const isMatch = bcrypt.compareSync(data.password, admin.password)

            if (isMatch) {
                if (admin.login) res.json({ token: admin.token })

                else {
                    admin.token = createToken()
                    admin.login = true

                    admin.save(err => {
                        if (!err) res.json({ token: admin.token })

                        else res.json({ success: false })
                    })
                }
            } else res.json({ success: false })
        } else res.json({ success: false })
    })
})


router.get('/is-auth', (req, res) => {
    Admin.findOne({ token: req.query.token }, (err, admin) => {
        if (admin) res.json({ auth: admin.login })

        else res.json({ success: false })
    })
})


router.post('/logout', (req, res) => {
    Admin.findOne({ token: req.body.token }, (err, admin) => {
        if (admin) {
            admin.login = false

            admin.save(err => {
                if (!err) res.json({ success: true })

                else res.json({ success: false })
            })
        } else res.json({ success: false })
    })
})


module.exports = router;