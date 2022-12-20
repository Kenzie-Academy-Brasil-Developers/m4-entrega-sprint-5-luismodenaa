import { NextFunction, Request, Response } from "express";
import { AnySchema } from "yup";
import userRoutes from "../routes/users.routes";

const ensureDataIsValidMiddleware =
  (schema: AnySchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const validatedData = await schema.validate(req.body, {
        stripUnknown: true,
        abortEarly: false,
      });
      req.body = validatedData;

      return next();
    } catch (error) {
      return res.status(400).json({
        error: error.errors,
      });
    }
  };

export default ensureDataIsValidMiddleware;
