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
Object.defineProperty(exports, "__esModule", { value: true });
const userServer_1 = require("../../server/userServer");
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, name, lastname, email, password } = req.body;
    (0, userServer_1.createUser)(username, name, lastname, email, password)
        .then(user => res.status(200).json(user))
        .catch(err => res.status(500).json({ error: err.message }));
});
exports.default = registerUser;
