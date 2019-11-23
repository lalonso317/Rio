const router = require("express").Router()
const db =require('../db')
const uuid = require("uuid/v4")
const sha512 = require("js-sha512")
const jwt = require("jsonwebtoken")
const config = require("config")

// Registration
router.post("/register", (req, res, next) => {
  const salt = uuid()
  const username = req.body.username
  const password = sha512(req.body.password + salt)

  const sql = 'INSERT INTO users (username, password, salt) VALUES (?, ?, ?)'

  db.query(sql, [username, password, salt], (err, results, fields) =>{
    if(err){
      throw new Error(err)
    }
    res.json({
      message: 'User created',
      results
    })
  })
})
// Login
router.post('/login', (req, res, next) =>{
  const username = req.body.username
  let password = req.body.password
 
  db.query('SELECT salt FROM users WHERE username = ?', 
    [username],
    (err, results, fields) =>{
    if(results.length > 0){
      password = sha512(password + results[0].salt)
       
      const sql = `
        SELECT COUNT(1) as count FROM users WHERE username = ? and password = ?
      `
      db.query(sql, [username, password], (err, results, fields) =>{
        if(results[0].count > 0){
          const token = jwt.sign({ username }, config.get('secret'))
          res.json({
            message: "Authenticated",
            token
          })
        }else{
          res.status(401).json({
            message: "Username or Password are incorrect"  
          })
        }
      })
    }else{
      res.status(401).json({
        message:"User does not exsit"
      })
    }
  })
})

// ADDING CHANNELS
router.post('/channel', (req, res, next) =>{
  const channel = req.body.channel
  const description = req.body.description

  const sql = 'INSERT INTO channels (channel, description) VALUES (?, ?)'

  db.query(sql, [channel, description], (err, results, fields) =>{
    if(err){
      throw new Error(err)
    }
    res.json(results)
  })
})

router.get('/channel', (req, res, next) =>{
  const channel = req.body.channel
  const description = req.body.description

  const sql = `SELECT channel, description FROM channels`

  db.query(sql, [channel, description], (err, results, fields) =>{
    res.json(results)
  })

})

module.exports = router
