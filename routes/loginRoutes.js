const express = require('express');
const login = require('../middlewares/loginMiddlewares');

const router = express.Router();

router.post('/', login.emaill);


module.exports = router;