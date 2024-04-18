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
exports.login = exports.userExists = exports.createUser = void 0;
const bcrypt_1 = __importDefault(require("../auth/handlers/bcrypt"));
const User_1 = __importDefault(require("../models/User"));
function createUser(username, name, lastname, email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const hashPassword = yield bcrypt_1.default.encrypt(password);
            yield User_1.default.create({
                username,
                name,
                lastname,
                email,
                password: hashPassword,
            });
            return { state: 'User created' };
        }
        catch (error) {
            return console.error('Error al crear el usuario:', error);
        }
    });
}
exports.createUser = createUser;
;
function userExists(username) {
    return __awaiter(this, void 0, void 0, function* () {
        const userExist = yield User_1.default.findOne({ where: { username } });
        return userExist;
    });
}
exports.userExists = userExists;
function login(username, password) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield User_1.default.findOne({ where: { username: username } });
            if (user) {
                const hashPassword = user.dataValues.password;
                const isValid = yield bcrypt_1.default.compare(password, hashPassword);
                if (isValid) {
                    return true;
                }
                else {
                    return false;
                }
            }
            else {
                return false;
            }
        }
        catch (error) {
            console.error('Error al iniciar sesión:', error);
            throw error;
        }
    });
}
exports.login = login;
;
