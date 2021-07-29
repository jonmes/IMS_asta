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

        // responds back only the error message 
        res.status(error.statusCode).json({
            success: false,
            message: error.message || "Internal Server Error"
        });
    }
}