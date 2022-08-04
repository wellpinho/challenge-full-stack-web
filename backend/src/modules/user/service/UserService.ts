import { v4 as uuidv4 } from "uuid";
import { AppError } from "../../../errors/AppError";
import { prismaClient } from "../../../prismaClient";

import { isCpf } from "iscpf";

interface IUser {
  name: string;
  email: string;
  CPF: string;
}

class UserService {
  async list() {
    const users = await prismaClient.user.findMany();

    return users;
  }

  async create({ name, email, CPF }: IUser) {
    if (!isCpf(CPF)) {
      throw new AppError("Invalid CPF");
    }

    const userExists = await prismaClient.user.findFirst({
      where: { email },
    });

    if (userExists?.email === email || userExists?.CPF === CPF) {
      throw new AppError(
        "User already exists! Please virify your email or cpf"
      );
    }

    const user = await prismaClient.user.create({
      data: {
        name,
        email,
        RA: uuidv4(),
        CPF,
        role: "user",
      },
    });

    return user;
  }
}

export { UserService };
