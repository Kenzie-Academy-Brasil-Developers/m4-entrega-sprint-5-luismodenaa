import AppDataSource from "../../data-source";
import Category from "../../entities/category.entity";
import AppError from "../../errors/AppError";

const listCategoryForIdService = async (categoryId: string) => {
  const categoryRepository = AppDataSource.getRepository(Category);

  const findCategory = await categoryRepository.findOne({
    where: { id: categoryId },
    relations: { properties: true },
  });

  if (!findCategory) {
    throw new AppError("Essa categoria não existe", 404);
  }

  return findCategory;
};

export default listCategoryForIdService;
