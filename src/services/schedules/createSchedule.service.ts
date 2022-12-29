import AppDataSource from "../../data-source";
import Propertie from "../../entities/propertie.entity";
import ScheduleUser from "../../entities/scheduleUser.entity";
import User from "../../entities/user.entity";
import AppError from "../../errors/AppError";
import { IScheduleRequest } from "../../interfaces/schedules";

const createScheduleService = async (data: IScheduleRequest) => {
  const scheduleRepository = AppDataSource.getRepository(ScheduleUser);
  const propertieRepository = AppDataSource.getRepository(Propertie);
  const userRepository = AppDataSource.getRepository(User);

  const verifyScheduleExists = await AppDataSource.createQueryBuilder()
    .select(["schedules.hour", "schedules.date"])
    .from(ScheduleUser, "schedules")
    .where("schedules.hour = :hour", { hour: data.hour })
    .andWhere("schedules.date = :date", { date: data.date })
    .getOne();

  if (verifyScheduleExists) {
    throw new AppError("Já existe um agendamento neste dia e horário", 404);
  }

  const verifyPropertieExists = await propertieRepository.findOneBy({
    id: data.propertyId,
  });

  if (!verifyPropertieExists) {
    throw new AppError("Não existe essa propriedade no sistema", 404);
  }

  const verifyUserExists = await userRepository.findOneBy({
    id: data.userId,
  });

  if (!verifyUserExists) {
    throw new AppError("Usuário não encontrado", 401);
  }

  const tratedHour = data.hour.split(":");
  const tratedDate = new Date(data.date).getDay();

  if (parseInt(tratedHour[0]) <= 8 || parseInt(tratedHour[0]) >= 18) {
    throw new AppError("Insira um horário válido", 400);
  }

  if (tratedDate == 6 || tratedDate == 0) {
    throw new AppError("Insira uma data válida");
  }

  const savingSchedule = scheduleRepository.create({
    date: data.date,
    hour: data.hour,
    propertyId: verifyPropertieExists,
    userId: verifyUserExists,
  });
  await scheduleRepository.save(savingSchedule);

  return { message: "Visita agendada" };
};

export default createScheduleService;
