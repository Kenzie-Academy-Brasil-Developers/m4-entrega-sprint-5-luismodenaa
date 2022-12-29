import AppDataSource from "../../data-source";
import Propertie from "../../entities/propertie.entity";
import ScheduleUser from "../../entities/scheduleUser.entity";
import AppError from "../../errors/AppError";

const listSchedulesService = async (propertieId: string) => {
  const propertiesRepository = AppDataSource.getRepository(Propertie);
  const scheduleRepository = AppDataSource.getRepository(ScheduleUser);

  const verifyPropertieExists = await propertiesRepository.findOneBy({
    id: propertieId,
  });

  if (!verifyPropertieExists) {
    throw new AppError("Propriedade não encontrada", 404);
  }

  const schedules = await propertiesRepository.findOne({
    where: {
      id: verifyPropertieExists.id,
    },
    relations: {
      schedule: true,
    },
  });

  return schedules;
};

export default listSchedulesService;
