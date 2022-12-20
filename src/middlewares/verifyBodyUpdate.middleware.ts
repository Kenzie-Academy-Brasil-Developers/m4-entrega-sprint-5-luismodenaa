import { NextFunction, Request, Response } from "express";
import AppError from "../errors/AppError";

const verifyBodyUpdateMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = req.body;

  if ("id" in user || "isAdm" in user || "isActive" in user) {
    throw new AppError("Você não pode atualizar Id, isAdm e isActive", 401);
  }

  return next();
};

export default verifyBodyUpdateMiddleware;
