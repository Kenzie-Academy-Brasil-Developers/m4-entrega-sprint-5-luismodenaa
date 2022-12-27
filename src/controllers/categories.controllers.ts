import { Request, Response } from "express";
import { ICategoryRequest } from "../interfaces/categories";
import createCategoryService from "../services/categories/createCategory.service";
import listAllCategoriesService from "../services/categories/listCategories.service";
import listCategoryForIdService from "../services/categories/listCategoryForId.service";

export const createCategoryController = async (req: Request, res: Response) => {
  const data: ICategoryRequest = req.body;
  const createCategory = await createCategoryService(data);

  return res.status(201).json(createCategory);
};

export const listAllCategoriesController = async (
  req: Request,
  res: Response
) => {
  const listingCategories = await listAllCategoriesService();
  return res.status(200).json(listingCategories);
};

export const listCategoryForIdController = async (
  req: Request,
  res: Response
) => {
  const listingCategory = await listCategoryForIdService(req.params.id);
  return res.status(200).json(listingCategory);
};
