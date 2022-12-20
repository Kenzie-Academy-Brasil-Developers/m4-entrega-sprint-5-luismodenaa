import { Router } from "express";
import { loginSessionController } from "../controllers/session.controllers";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import { sessionSerializar } from "../serializers/session.serializers";

const sessionRoutes = Router();

sessionRoutes.post(
  "",
  ensureDataIsValidMiddleware(sessionSerializar),
  loginSessionController
);

export default sessionRoutes;
