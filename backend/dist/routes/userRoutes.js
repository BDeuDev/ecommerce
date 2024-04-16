"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const registerData_1 = __importDefault(require("../auth/middlewares/registerData"));
const existingUser_1 = __importDefault(require("../auth/middlewares/existingUser"));
const registerUser_1 = __importDefault(require("../auth/middlewares/registerUser"));
const router = express_1.default.Router();
router.post(`/register`, registerData_1.default, existingUser_1.default, registerUser_1.default);
module.exports = router;
