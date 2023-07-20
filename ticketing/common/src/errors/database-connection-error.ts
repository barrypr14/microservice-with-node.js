import { CustomError } from "./custom-error";

export class DatabaseConnectionError extends CustomError {
    reason = 'Error conencting to database';
    statusCode = 500;

    constructor(){
        super('Error conencting to database');

        Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
    }

    serializeErrors(){
        return [
            { message: this.reason }
        ];
    }
}