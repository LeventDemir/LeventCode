const Admin = require('../models/admin')


module.exports = (req, res, next) => {
    Admin.findOne({ token: req.body.token }, (err, admin) => {
        if (admin) {
            if (admin.login) {
                next()
            } else {
                res.json({ permission: false })
            }
        } else {
            res.json({ permission: false })
        }
    })
}