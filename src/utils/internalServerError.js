const AppError = require("./AppError");

class InternalServerError extends AppError {
    constructor(){
        super(`It's not you, it's out server where something went wrong`,500);
    }
}

module.exports = InternalServerError;