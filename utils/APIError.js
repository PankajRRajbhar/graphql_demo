export default class APIError extends Error {
    constructor({message,errors}) {
        super(message)
        this.message = message;
        this.errors = errors;
    }
}