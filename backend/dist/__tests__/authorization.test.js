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
const jwt_1 = __importDefault(require("../auth/handlers/jwt"));
const authorization_1 = __importDefault(require("../auth/middlewares/authorization"));
const mockNext = jest.fn();
const mockReq = {};
const mockRes = {};
describe('authorization middleware', () => {
    it('should respond with a token when authorization is successful', () => __awaiter(void 0, void 0, void 0, function* () {
        mockReq.body = { username: 'usuario' };
        jwt_1.default.tokenSing = jest.fn().mockResolvedValue('mockedToken');
        yield (0, authorization_1.default)(mockReq, mockRes, mockNext);
        expect(mockRes.status).toHaveBeenCalledWith(200);
        expect(mockRes.json).toHaveBeenCalledWith({ token: 'mockedToken' });
        expect(mockNext).toHaveBeenCalled();
    }));
    it('should respond with an error if authorization fails', () => __awaiter(void 0, void 0, void 0, function* () {
        mockReq.body = { username: 'usuario' };
        jwt_1.default.tokenSing = jest.fn().mockRejectedValue(new Error('Mocked error'));
        yield (0, authorization_1.default)(mockReq, mockRes, mockNext);
        expect(mockRes.status).toHaveBeenCalledWith(500);
        expect(mockRes.json).toHaveBeenCalledWith({ error: 'Error interno del servidor' });
        expect(mockNext).not.toHaveBeenCalled();
    }));
});
