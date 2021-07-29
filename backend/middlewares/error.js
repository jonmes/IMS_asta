const ErrorHandler = require('../utils/errorHandler');



module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;

    if (process.env.NODE_ENV === 'DEVELOPMENT') {

        // responds back all the error stack
        res.status(err.statusCode).json({
            status: false,
            error: err,
            errMessage: err.message,
            stack: err.stack
        })
    }

    if (process.env.NODE_ENV === 'PRODUCTION') {
        let error = {...err }
        error.message = err.message

        // Wrong Mongoose Object ID error handler
        if (err.name === 'castError') {
            const message = `Resource not found. Invalid: ${err.path}`
            error = new ErrorHandler(message, 400)
        }

        // Handling Mongoose Validation Error
        if (err.name === 'ValidationError') {
            const message = Object.values(err.errors).map(value => value.message);
            error = new ErrorHandler(message, 400);
        }

        // responds back only the error message 
        res.status(error.statusCode).json({
            success: false,
            message: error.message || "Internal Server Error"
        });
    }
}