import { Router } from "express";
import { errors } from "celebrate";

import { createUserJoi } from "../../../middleware/UserJoi";
import { UserController } from "../controller/UserController";

const userRoutes = Router();
const userController = new UserController();

userRoutes.post("/users", createUserJoi, userController.create);

userRoutes.use(errors());

export { userRoutes };
