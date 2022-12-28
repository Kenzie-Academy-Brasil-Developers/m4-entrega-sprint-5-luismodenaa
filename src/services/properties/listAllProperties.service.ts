import AppDataSource from "../../data-source";
import Propertie from "../../entities/propertie.entity";

const listAllPropertiesService = () => {
  const propertiesRepository = AppDataSource.getRepository(Propertie);
  const allProperties = propertiesRepository.find();

  return allProperties;
};

export default listAllPropertiesService;
