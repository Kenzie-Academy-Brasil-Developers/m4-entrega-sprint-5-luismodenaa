import { NextFunction, Request, Response } from "express";
import AppError from "../errors/AppError";

const ensureAdmMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = req.user;

  if (user.adm) {
    return next();
  }

  throw new AppError("Você não tem autorização", 403);
};

export default ensureAdmMiddleware;
