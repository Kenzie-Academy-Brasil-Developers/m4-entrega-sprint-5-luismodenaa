import AppDataSource from "../../data-source";
import Category from "../../entities/category.entity";
import AppError from "../../errors/AppError";
import { ICategoryRequest } from "../../interfaces/categories";

const createCategoryService = async (data: ICategoryRequest) => {
  const categoryRepository = AppDataSource.getRepository(Category);

  const categoryAlreadyExists = await categoryRepository.findOneBy({
    name: data.name,
  });

  if (categoryAlreadyExists) {
    throw new AppError("Categoria já existente", 409);
  }

  const savingCategory = categoryRepository.create(data);
  await categoryRepository.save(savingCategory);

  return savingCategory;
};

export default createCategoryService;
