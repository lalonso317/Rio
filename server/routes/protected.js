const router = require('express').Router()

router.get('/goo',(req, res, next) =>{
    res.json({
        message: "goo be gone"
    })
})

module.exports = router