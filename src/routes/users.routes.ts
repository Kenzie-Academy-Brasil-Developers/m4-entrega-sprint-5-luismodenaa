import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  listUsersController,
  updateUserController,
} from "../controllers/users.controllers";
import ensureAdmMiddleware from "../middlewares/ensureAdm.middleware";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import ensureUserAlreadyExistsMiddleware from "../middlewares/ensureUserAlreadyExists.middleware";
import verifyBodyUpdateMiddleware from "../middlewares/verifyBodyUpdate.middleware";
import {
  updateUserSerializer,
  userSerializer,
} from "../serializers/user.serializers";

const userRoutes = Router();

userRoutes.post(
  "",
  ensureDataIsValidMiddleware(userSerializer),
  ensureUserAlreadyExistsMiddleware,
  createUserController
);
userRoutes.get(
  "",
  ensureAuthMiddleware,
  ensureAdmMiddleware,
  listUsersController
);
userRoutes.patch(
  "/:id",
  ensureAuthMiddleware,
  ensureAdmMiddleware,
  verifyBodyUpdateMiddleware,
  ensureDataIsValidMiddleware(updateUserSerializer),
  updateUserController
);
userRoutes.delete(
  "/:id",
  ensureAuthMiddleware,
  ensureAdmMiddleware,
  deleteUserController
);

export default userRoutes;
