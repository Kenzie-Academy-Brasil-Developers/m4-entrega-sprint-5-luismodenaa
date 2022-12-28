import { Router } from "express";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";

const schedulesRoutes = Router();

schedulesRoutes.post("", ensureAuthMiddleware);

export default schedulesRoutes;
