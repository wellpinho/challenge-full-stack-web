import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { AppError } from "./errors/AppError";
import { routes } from "./index.routes";

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      status: "Error",
      message: error.message,
    });
  }

  return res.status(500).json({
    status: "Error",
    message: "Internal Server Error",
  });
});

export { app };
