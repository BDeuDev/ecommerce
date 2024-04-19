import { Request, Response } from 'express';
import jwt from '../auth/handlers/jwt';
import  authorization  from '../auth/middlewares/authorization';

const mockNext = jest.fn();
const mockReq = {} as Request;
const mockRes = {} as Response;

describe('authorization middleware', () => {
  it('should respond with a token when authorization is successful', async () => {
    
    mockReq.body = { username: 'usuario' };

    jwt.tokenSing = jest.fn().mockResolvedValue('mockedToken');

    await authorization(mockReq, mockRes, mockNext);

    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toHaveBeenCalledWith({ token: 'mockedToken' });
    expect(mockNext).toHaveBeenCalled();
  });

  it('should respond with an error if authorization fails', async () => {

    mockReq.body = { username: 'usuario' };

    jwt.tokenSing = jest.fn().mockRejectedValue(new Error('Mocked error'));

    await authorization(mockReq, mockRes, mockNext);

    expect(mockRes.status).toHaveBeenCalledWith(500);
    expect(mockRes.json).toHaveBeenCalledWith({ error: 'Error interno del servidor' });
    expect(mockNext).not.toHaveBeenCalled();
  });
});
