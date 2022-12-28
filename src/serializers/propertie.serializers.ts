import * as yup from "yup";
import { SchemaOf } from "yup";
import { IPropertyRequest } from "../interfaces/properties";

const addressSchema = yup.object().shape({
  district: yup.string().required(),
  zipCode: yup
    .string()

    .required(),
  number: yup.number(),
  city: yup.string().required(),
  state: yup.string().required(),
});

export const propertieSerializer: SchemaOf<IPropertyRequest> = yup
  .object()
  .shape({
    value: yup.number().required(),
    size: yup.number().required(),
    address: addressSchema.required(),
    categoryId: yup.string().required(),
  });
