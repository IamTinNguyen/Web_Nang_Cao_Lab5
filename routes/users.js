const express = require('express');
const router = express.Router();
const users = require('../controllers/users');
const catchAsync = require('../utils/catchAsync');


const User = require('../models/users');

router.route('/')
    .get(catchAsync(users.index));

router.route('/add')
    .get(catchAsync(users.renderAdd))
    .post(catchAsync(users.add));
router.route('/update/:id')
    .get(catchAsync(users.renderUpdate))
    .put(catchAsync(users.update));


router.route('/delete/:id')
    .get(catchAsync(users.delete));

module.exports = router;