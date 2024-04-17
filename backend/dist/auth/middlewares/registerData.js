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
const joi_1 = __importDefault(require("../handlers/joi"));
const register_1 = __importDefault(require("../schemas/register"));
const registerData = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, name, lastname, email, password } = req.body;
        const data = { username, name, lastname, email, password };
        const isValid = yield (0, joi_1.default)(data, register_1.default);
        if (isValid) {
            return res.status(400).json({ error: 'Invalid data entry' });
        }
        next();
    }
    catch (err) {
        console.error('Error interno del servidor:', err);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});
exports.default = registerData;
