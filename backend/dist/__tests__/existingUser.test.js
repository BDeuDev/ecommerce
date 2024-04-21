"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const existingUser_1 = __importDefault(require("../auth/middlewares/existingUser"));
const userServer = __importStar(require("../server/userServer"));
// Mock de la función userExists
jest.mock('../server/userServer', () => ({
    userExists: jest.fn()
}));
describe('existingUser middleware', () => {
    const mockReq = { body: { username: 'testUser' } };
    const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
    };
    const mockNext = jest.fn();
    beforeEach(() => {
        jest.clearAllMocks();
    });
    it('should call next middleware if user does not exist', () => __awaiter(void 0, void 0, void 0, function* () {
        userServer.userExists.mockResolvedValue(false);
        yield (0, existingUser_1.default)(mockReq, mockRes, mockNext);
        expect(userServer.userExists).toHaveBeenCalledWith('testUser');
        expect(mockRes.status).not.toHaveBeenCalled();
        expect(mockRes.json).not.toHaveBeenCalled();
        expect(mockNext).toHaveBeenCalled();
    }));
    it('should respond with 409 if user already exists', () => __awaiter(void 0, void 0, void 0, function* () {
        userServer.userExists.mockResolvedValue(true);
        yield (0, existingUser_1.default)(mockReq, mockRes, mockNext);
        expect(userServer.userExists).toHaveBeenCalledWith('testUser');
        expect(mockRes.status).toHaveBeenCalledWith(409);
        expect(mockRes.json).toHaveBeenCalledWith({ error: 'User already exists' });
        expect(mockNext).not.toHaveBeenCalled();
    }));
    it('should respond with 500 if an error occurs', () => __awaiter(void 0, void 0, void 0, function* () {
        userServer.userExists.mockRejectedValue(new Error('Mocked error'));
        yield (0, existingUser_1.default)(mockReq, mockRes, mockNext);
        expect(userServer.userExists).toHaveBeenCalledWith('testUser');
        expect(mockRes.status).toHaveBeenCalledWith(500);
        expect(mockRes.json).toHaveBeenCalledWith({ error: 'Internal server error' });
        expect(mockNext).not.toHaveBeenCalled();
    }));
});
