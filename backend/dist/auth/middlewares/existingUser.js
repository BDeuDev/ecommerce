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
const perf_hooks_1 = require("perf_hooks");
const existingUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { username } = req.body;
    try {
        const start = perf_hooks_1.performance.now();
        const doesUserExist = yield (0, userServer_1.userExists)(username);
        const end = perf_hooks_1.performance.now();
        console.log(`Execution time: ${end - start} ms`);
        if (doesUserExist) {
            res.status(409).json({ error: 'User already exists' });
        }
        else {
            next();
        }
    }
    catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
});
exports.default = existingUser;
