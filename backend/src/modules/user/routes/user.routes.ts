import { Router } from "express";
import { errors } from "celebrate";

import { createUserJoi, updateUserJoi } from "../../../middleware/UserJoi";
import { UserController } from "../controller/UserController";

const userRoutes = Router();
const userController = new UserController();

userRoutes.get("/users", userController.list);
userRoutes.post("/users", createUserJoi, userController.create);
userRoutes.put("/users/:id", updateUserJoi, userController.update);
userRoutes.delete("/users/:id", userController.delete);

userRoutes.use(errors());

export { userRoutes };
