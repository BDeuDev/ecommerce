export default interface IValidationError {
    message: string;
    path: string[];
    type: string;
}