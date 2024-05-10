// const logger = require('../shared/logger');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const User = require('../models/User');

exports.register = asyncHandler(async (req, res, next) => {
    const {
        name, email, password, role, contact, teacherId,gender,school,designation
    } = req.body;

    // Create user
    const user = await User.create({
        name,
        email,
        password,
        role,
        contact,
        teacherId,
        gender,
        school,
        designation
    });

    sendTokenResponse(user, 200, res);
});

exports.login = asyncHandler(async (req, res, next) => {
    const {email, password} = req.body;

    // Validate emil & password
    if (!email || !password) {
        // logger.info('User logged in');
        return next(new ErrorResponse('Please provide an email and password', 400));
    }

    // Check for user
    let user = await User.findOne({email}).select('+password');

    if (!user) {
        return next(new ErrorResponse('Invalid credentials', 401));
    }

    // Check if password matches
    const isMatch = await user.matchPassword(password);
    
    if (!isMatch) {
        return next(new ErrorResponse('Invalid credentials', 401));
    }
    
    const startTime = await user.getStartTime();
    if (!startTime) {
        await await User.update({email}, {startTime: Math.floor(Date.now() / 1000)});
    }

    user = await User.findOne({email});
    sendTokenResponse(user, 200, res);
});


exports.logout = asyncHandler(async (req, res, next) => {
    res.cookie('token', 'none', {
        expires: new Date(Date.now() + 10 * 1000),
        httpOnly: true
    });

    res.status(200).json({
        success: true,
        data: {}
    });
});

exports.getMe = asyncHandler(async (req, res, next) => {
    const user = await User.findById(req.user.id);

    res.status(200).json({
        success: true,
        data: user
    });
});


// Get token from model, create cookie and send response
const sendTokenResponse = (user, statusCode, res) => {
    // Create token
    const token = user.getSignedJwtToken();

    const options = {
        expires: new Date(
            Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
        ),
        httpOnly: true
    };

    if (process.env.NODE_ENV === 'production') {
        options.secure = true;
    }
    res
        .status(statusCode)
        .cookie('token', token, options)
        .json({
            success: true,
            token, user
        });
};
