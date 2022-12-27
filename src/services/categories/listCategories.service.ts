import AppDataSource from "../../data-source";
import Category from "../../entities/category.entity";

const listAllCategoriesService = async () => {
  const categoriesRepository = AppDataSource.getRepository(Category);
  const categories = await categoriesRepository.find();

  return categories;
};

export default listAllCategoriesService;
