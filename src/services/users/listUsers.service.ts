import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";

export const listUsersService = async () => {
  const usersRepository = AppDataSource.getRepository(User);

  const users = usersRepository.find({
    select: [
      "id",
      "email",
      "name",
      "isActive",
      "isAdm",
      "createdAt",
      "updatedAt",
    ],
  });

  return users;
};
