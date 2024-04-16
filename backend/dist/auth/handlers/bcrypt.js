"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
function encrypt(textPlain) {
    return bcrypt_1.default.hash(textPlain, 10);
}
//Compares the text plain of the password with the hash password an return true or false
function compare(passwordPlain, hashPassword) {
    return bcrypt_1.default.compare(passwordPlain, hashPassword);
}
exports.default = { encrypt, compare };
