import * as yup from "yup";
import { SchemaOf } from "yup";
import { IUser, IUserRequest, IUserUpdate } from "../interfaces/users";

export const userSerializer: SchemaOf<IUserRequest> = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup
    .string()
    .email("Precisa ser um email válido")
    .required("Email obrigatório"),
  password: yup.string().required("Senha obrigatória"),
  isAdm: yup.boolean().required("Administrador obrigatório"),
});

export const removingUserPasswordSerializer: SchemaOf<IUser> = yup
  .object()
  .shape({
    id: yup.string().notRequired(),
    name: yup.string().notRequired(),
    email: yup.string().email().notRequired(),
    isAdm: yup.boolean().notRequired(),
    isActive: yup.boolean().notRequired(),
    createdAt: yup.date().notRequired(),
    updatedAt: yup.date().notRequired(),
  });

export const updateUserSerializer: SchemaOf<IUserUpdate> = yup.object().shape({
  name: yup.string().notRequired(),
  email: yup.string().email("Precisa ser um email válido").notRequired(),
  password: yup.string().notRequired(),
});
