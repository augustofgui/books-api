import { Request, Response } from 'express';
import { createUserBody } from '../utils/dto/create-user-body';
import { User } from '../entities/user';

export default class UserController {
  async create(request: Request, response: Response) {
    const { name, email, password } = createUserBody.parse(request.body);

    const user = new User({ name, email, password });

    return response.status(201).json({ user });
  }
}
