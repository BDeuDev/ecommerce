"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("../auth/handlers/bcrypt"));
const User_1 = __importDefault(require("../models/User"));
function createUser(username, name, lastname, email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const hashPassword = yield bcrypt_1.default.encrypt(password);
            const newUser = yield User_1.default.create({
                username,
                name,
                lastname,
                email,
                password: hashPassword,
            });
            return { success: true };
        }
        catch (error) {
            return console.error('Error al crear el usuario:', error);
        }
    });
}
;