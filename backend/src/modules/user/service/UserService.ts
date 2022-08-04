import { v4 as uuidv4 } from "uuid";
import { AppError } from "../../../errors/AppError";
import { prismaClient } from "../../../prismaClient";

import { isCpf } from "iscpf";

interface IUser {
  name: string;
  email: string;
  CPF: string;
}

interface IUpdateUser {
  name: string;
  email: string;
}

class UserService {
  async list() {
    const users = await prismaClient.user.findMany();

    return users;
  }

  async create({ name, email, CPF }: IUser) {
    if (CPF && !isCpf(CPF)) {
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

  async update(id: string, { name, email }: IUpdateUser) {
    const userExists = await prismaClient.user.findUnique({
      where: { id },
    });

    if (!userExists) {
      throw new AppError("User not found!");
    }

    const user = await prismaClient.user.update({
      where: { id },
      data: { name, email },
    });

    return user;
  }

  async delete(id: string) {
    const userExists = await prismaClient.user.findUnique({
      where: { id },
    });

    if (!userExists) {
      throw new AppError("User not found!");
    }

    await prismaClient.user.delete({
      where: { id },
    });

    return { message: "Deleted user successfully!" };
  }
}

export { UserService };
