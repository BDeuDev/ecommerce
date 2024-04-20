import { Request, Response } from 'express';
import jwt from '../auth/handlers/jwt';
import authorization from '../auth/middlewares/authorization';

// Simulación de objetos de solicitud y respuesta
const mockReq = { body: { username: 'usuario' } } as Request;
const mockRes = {
  status: jest.fn().mockReturnThis(),
  json: jest.fn(),
} as unknown as Response;


describe('authorization middleware', () => {
  it('should respond with a token when authorization is successful', async () => {
    // Simulación de la función tokenSing
    jwt.tokenSing = jest.fn().mockResolvedValue('mockedToken');

    await authorization(mockReq, mockRes);

    // Verificar que se llame a res.status con el código 200 y res.json con el token esperado
    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toHaveBeenCalledWith({ token: 'mockedToken' });
    // Verificar que next no se llame

  });

  it('should respond with an error if authorization fails', async () => {
    // Simulación de la función tokenSing que arroja un error
    jwt.tokenSing = jest.fn().mockRejectedValue(new Error('Mocked error'));

    await authorization(mockReq, mockRes);

    // Verificar que se llame a res.status con el código 500 y res.json con el mensaje de error
    expect(mockRes.status).toHaveBeenCalledWith(500);
    expect(mockRes.json).toHaveBeenCalledWith({ error: 'Error interno del servidor' });
    // Verificar que next no se llame

  });
});
