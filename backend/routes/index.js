// backend/routes/index.js
const express = require('express');
const router = express.Router();

//TEST ROUTE
// router.get('/hello/world', function(req, res) {
//   res.cookie('XSRF-TOKEN', req.csrfToken());
//   res.send('Hello World!');
// });


//In this route, you are setting a cookie on the response with the name of 
//XSRF-TOKEN to the value of the req.csrfToken method's return. Then, send 
//the token as the response for easy retrieval.
//This route should not be available in production, but it will not be 
//exclusive to the production application until you implement the frontend 
//of the application later.
router.get("/api/csrf/restore", (req, res)=> {
  const csrfToken = req.csrfToken()
  res.cookie("XSRF-TOKEN", csrfToken)
  res.status(200).json({
    'XSRF-TOKEN': csrfToken
  })
})





module.exports = router;
