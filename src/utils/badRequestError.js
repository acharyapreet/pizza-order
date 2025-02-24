const AppError = require("./AppError");

class BadRequestError extends AppError {
    constructor(invalidParams){
        // invalidParams: []
        let message = '';
        invalidParams.forEach(params => message += `${params} \n `)
        super(`Request has following invalid parameters\n${invalidParams}`,400);
    }
}

module.exports = BadRequestError;