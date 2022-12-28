import { Router } from "express";
import {
  createPropertieController,
  listAllPropertiesController,
} from "../controllers/properties.controllers";
import ensureAdmMiddleware from "../middlewares/ensureAdm.middleware";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import { propertieSerializer } from "../serializers/propertie.serializers";

const propertiesRoutes = Router();

propertiesRoutes.post(
  "",
  ensureAuthMiddleware,
  ensureAdmMiddleware,
  ensureDataIsValidMiddleware(propertieSerializer),
  createPropertieController
);

propertiesRoutes.get("", listAllPropertiesController);

export default propertiesRoutes;
