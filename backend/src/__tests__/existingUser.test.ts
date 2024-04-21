import { NextFunction, Request, Response } from 'express';
import existingUser from '../auth/middlewares/existingUser';
import * as userServer from '../server/userServer';

// Mock de la función userExists
jest.mock('../server/userServer', () => ({
  userExists: jest.fn()
}));

describe('existingUser middleware', () => {
  const mockReq = { body: { username: 'testUser' } } as Request;
  const mockRes = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn()
  } as unknown as Response;
  const mockNext = jest.fn() as NextFunction;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should call next middleware if user does not exist', async () => {
    (userServer.userExists as jest.Mock).mockResolvedValue(false);

    await existingUser(mockReq, mockRes, mockNext);

    expect(userServer.userExists).toHaveBeenCalledWith('testUser');
    expect(mockRes.status).not.toHaveBeenCalled();
    expect(mockRes.json).not.toHaveBeenCalled();
    expect(mockNext).toHaveBeenCalled();
  });

  it('should respond with 409 if user already exists', async () => {
    (userServer.userExists as jest.Mock).mockResolvedValue(true);

    await existingUser(mockReq, mockRes, mockNext);

    expect(userServer.userExists).toHaveBeenCalledWith('testUser');
    expect(mockRes.status).toHaveBeenCalledWith(409);
    expect(mockRes.json).toHaveBeenCalledWith({ error: 'User already exists' });
    expect(mockNext).not.toHaveBeenCalled();
  });

  it('should respond with 500 if an error occurs', async () => {
    (userServer.userExists as jest.Mock).mockRejectedValue(new Error('Mocked error'));

    await existingUser(mockReq, mockRes, mockNext);

    expect(userServer.userExists).toHaveBeenCalledWith('testUser');
    expect(mockRes.status).toHaveBeenCalledWith(500);
    expect(mockRes.json).toHaveBeenCalledWith({ error: 'Internal server error'});
    expect(mockNext).not.toHaveBeenCalled();
  });
});
