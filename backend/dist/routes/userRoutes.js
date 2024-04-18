"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const registerData_1 = __importDefault(require("../auth/middlewares/registerData"));
const existingUser_1 = __importDefault(require("../auth/middlewares/existingUser"));
const registerUser_1 = __importDefault(require("../auth/middlewares/registerUser"));
const loginData_1 = __importDefault(require("../auth/middlewares/loginData"));
const passwordCheck_1 = __importDefault(require("../auth/middlewares/passwordCheck"));
const authorization_1 = __importDefault(require("../auth/middlewares/authorization"));
const url_1 = require("../config/url");
const router = express_1.default.Router();
router.post(`${url_1.URL_REGISTER}`, registerData_1.default, existingUser_1.default, registerUser_1.default);
router.post(`${url_1.URL_LOGIN}`, loginData_1.default, passwordCheck_1.default, authorization_1.default);
module.exports = router;
