import AppDataSource from "../../data-source";
import Address from "../../entities/address.entity";
import Category from "../../entities/category.entity";
import Propertie from "../../entities/propertie.entity";
import AppError from "../../errors/AppError";
import { IPropertyRequest } from "../../interfaces/properties";

const createPropertyService = async (data: IPropertyRequest) => {
  const propertiesRepository = AppDataSource.getRepository(Propertie);
  const addressesRespository = AppDataSource.getRepository(Address);
  const categoriesRepository = AppDataSource.getRepository(Category);

  if (data.address.zipCode.length > 8) {
    throw new AppError("Insira um cep válido");
  }

  if (data.address.state.length > 2) {
    throw new AppError("Insira um estado válido");
  }

  const ensureCategoryExists = await categoriesRepository.findOneBy({
    id: data.categoryId,
  });

  if (!ensureCategoryExists) {
    throw new AppError("Essa categoria não existe", 404);
  }

  const verifyAddressExists = await addressesRespository.findOneBy({
    zipCode: data.address.zipCode,
  });

  if (verifyAddressExists) {
    throw new AppError("Esse endereço já está cadastrado", 409);
  }

  const savingAddress = addressesRespository.create(data.address);
  await addressesRespository.save(savingAddress);

  const savingProperty = propertiesRepository.create({
    addressId: savingAddress,
    categoryId: ensureCategoryExists,
    size: data.size,
    value: data.value,
  });
  await propertiesRepository.save(savingProperty);

  return savingProperty;
};

export default createPropertyService;
