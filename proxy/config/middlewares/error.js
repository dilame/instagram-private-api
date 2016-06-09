
var Exceptions = require('../../instagram/v1').Exceptions;


exports.apiError = function (err, req, res, next) {
    if(err instanceof Exceptions.APIError) {
        res.status(400);
        res.json(err.serialize());
    } else {
        next(err);
    }
};

exports.fatalError = function (err, req, res, next) {
    console.error("Fatal Error", err.stack); 
    // treat as 404
    if (err.message
        && (~err.message.indexOf('not found')
        || (~err.message.indexOf('Cast to ObjectId failed')))) {
        return next();
    }
    // error page
    var error = new Exceptions.APIError("Internal Server Error");
    res.status(500).json(error.serialize())
};


exports.notFoundError = function (req, res, next) {
    var error = new Exceptions.APIError("The API endpoint wasn't found!");
    res.status(404).json(error.serialize())
}