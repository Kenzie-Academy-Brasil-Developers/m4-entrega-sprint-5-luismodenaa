import { Router } from "express";
import {
  createScheduleController,
  listSchedulesController,
} from "../controllers/schedules.controllers";
import ensureAdmMiddleware from "../middlewares/ensureAdm.middleware";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";

const schedulesRoutes = Router();

schedulesRoutes.post("", ensureAuthMiddleware, createScheduleController);
schedulesRoutes.get(
  "/properties/:id",
  ensureAuthMiddleware,
  ensureAdmMiddleware,
  listSchedulesController
);

export default schedulesRoutes;
