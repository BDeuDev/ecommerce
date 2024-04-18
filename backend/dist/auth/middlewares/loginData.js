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
const login_1 = __importDefault(require("../schemas/login"));
const loginData = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        const data = { username: username, password: password };
        yield (0, joi_1.default)(data, login_1.default)
            .then((value) => {
            if (value)
                return res.status(400).json({ error: 'Datos no validos' });
            else
                return next();
        })
            .catch(err => res.status(500).json({ error: err }));
    }
    catch (err) {
        res.status(500).json({ error: 'Error interno del servidor : ', err });
    }
});
exports.default = loginData;
