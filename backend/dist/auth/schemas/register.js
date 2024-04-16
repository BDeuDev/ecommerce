"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const registerSchema = joi_1.default.object({
    username: joi_1.default.string().alphanum().min(3).max(30).required(),
    name: joi_1.default.string().pattern(/^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/).min(3).max(30).required(),
    lastname: joi_1.default.string().pattern(/^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/).min(3).max(30).required(),
    email: joi_1.default.string().pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/).required(),
    password: joi_1.default.string().pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}|[\]\\:";'<>?,./]).*$/).min(8).max(30).required(),
});
exports.default = registerSchema;
