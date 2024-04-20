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
// Simulación de objetos de solicitud y respuesta
const mockReq = { body: { username: 'usuario' } };
const mockRes = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
};
describe('authorization middleware', () => {
    it('should respond with a token when authorization is successful', () => __awaiter(void 0, void 0, void 0, function* () {
        // Simulación de la función tokenSing
        jwt_1.default.tokenSing = jest.fn().mockResolvedValue('mockedToken');
        yield (0, authorization_1.default)(mockReq, mockRes);
        // Verificar que se llame a res.status con el código 200 y res.json con el token esperado
        expect(mockRes.status).toHaveBeenCalledWith(200);
        expect(mockRes.json).toHaveBeenCalledWith({ token: 'mockedToken' });
        // Verificar que next no se llame
    }));
    it('should respond with an error if authorization fails', () => __awaiter(void 0, void 0, void 0, function* () {
        // Simulación de la función tokenSing que arroja un error
        jwt_1.default.tokenSing = jest.fn().mockRejectedValue(new Error('Mocked error'));
        yield (0, authorization_1.default)(mockReq, mockRes);
        // Verificar que se llame a res.status con el código 500 y res.json con el mensaje de error
        expect(mockRes.status).toHaveBeenCalledWith(500);
        expect(mockRes.json).toHaveBeenCalledWith({ error: 'Error interno del servidor' });
        // Verificar que next no se llame
    }));
});
