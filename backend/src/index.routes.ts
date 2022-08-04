import { Request, Response, Router } from "express";
import { userRoutes } from "./modules/user/routes/user.routes";

const routes = Router();

routes.get("/", (req: Request, res: Response) => {
  return res.status(200).json("Bem vindo ao Grupo A Educação.");
});

routes.use(userRoutes);

export { routes };
