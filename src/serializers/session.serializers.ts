import * as yup from "yup";
import { SchemaOf } from "yup";
import ISessionRequest from "../interfaces/sessions";

export const sessionSerializar: SchemaOf<ISessionRequest> = yup.object().shape({
  email: yup
    .string()
    .email("Precisa ser um email válido")
    .required("Email obrigatório"),
  password: yup.string().required("Senha obrigatória"),
});
