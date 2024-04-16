"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const UserSchema = joi_1.default.object({
    username: joi_1.default.string().alphanum().min(3).max(30).required(),
    name: joi_1.default.string().pattern(new RegExp('^[a-zA-ZÀ-ÖØ-öø-ÿ]{3,30}$')).required(),
    lastname: joi_1.default.string().pattern(new RegExp('^[a-zA-ZÀ-ÖØ-öø-ÿ]{3,30}$')).required(),
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
});
exports.default = UserSchema;
