import { Router } from "express";
import {
  createCategoryController,
  listAllCategoriesController,
  listCategoryForIdController,
} from "../controllers/categories.controllers";
import ensureAdmMiddleware from "../middlewares/ensureAdm.middleware";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import { categorySerializer } from "../serializers/category.serializers";

const categoriesRoutes = Router();

categoriesRoutes.post(
  "",
  ensureAuthMiddleware,
  ensureAdmMiddleware,
  ensureDataIsValidMiddleware(categorySerializer),
  createCategoryController
);
categoriesRoutes.get("", listAllCategoriesController);
categoriesRoutes.get("/:id/properties", listCategoryForIdController);

export default categoriesRoutes;
