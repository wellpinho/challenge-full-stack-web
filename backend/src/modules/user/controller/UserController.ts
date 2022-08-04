import { Request, Response } from "express";
import { resolve } from "path";
import { UserService } from "../service/UserService";

class UserController {
  async list(req: Request, res: Response) {
    const listUsers = new UserService();
    const users = await listUsers.list();

    return res.status(200).json(users);
  }

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

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { name, email } = req.body;
    const updateUserService = new UserService();
    const user = await updateUserService.update(id, {
      name,
      email,
    });

    return res.status(201).json(user);
  }
}

export { UserController };
