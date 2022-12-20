import { Request, Response } from "express";
import { IUserRequest, IUserUpdate } from "../interfaces/users";
import createUserService from "../services/users/createUser.service";
import { deleteUserService } from "../services/users/deleteUser.service";
import { listUsersService } from "../services/users/listUsers.service";
import updateUserService from "../services/users/updateUser.service";

export const createUserController = async (req: Request, res: Response) => {
  const userData: IUserRequest = req.body;
  const newUser = await createUserService(userData);

  return res.status(201).json(newUser);
};

export const listUsersController = async (req: Request, res: Response) => {
  const users = await listUsersService();

  return res.status(200).json(users);
};

export const deleteUserController = async (req: Request, res: Response) => {
  const user = await deleteUserService(req.params.id);

  return res.status(204).json(user);
};

export const updateUserController = async (req: Request, res: Response) => {
  const userData: IUserUpdate = req.body;

  const updatedUser = await updateUserService(userData, req.params.id);

  return res.status(200).json(updatedUser);
};
