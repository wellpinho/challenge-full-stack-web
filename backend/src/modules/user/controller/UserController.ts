import { Request, Response } from "express";
import { UserService } from "../service/UserService";

class UserController {
  async create(req: Request, res: Response) {
    const { name, email, CPF } = req.body;
    const createUserService = new UserService();
    const user = await createUserService.create({
      name,
      email,
      CPF,
    });

    return res.status(201).json(user);
  }
}

export { UserController };
