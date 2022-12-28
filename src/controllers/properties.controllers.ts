import { Request, Response } from "express";
import { IPropertyRequest } from "../interfaces/properties";
import createPropertyService from "../services/properties/createProperty.service";
import listAllPropertiesService from "../services/properties/listAllProperties.service";

export const createPropertieController = async (
  req: Request,
  res: Response
) => {
  const data: IPropertyRequest = req.body;
  const createPropertie = await createPropertyService(data);
  return res.status(201).json(createPropertie);
};

export const listAllPropertiesController = async (
  req: Request,
  res: Response
) => {
  const listingProperties = await listAllPropertiesService();
  return res.status(200).json(listingProperties);
};
