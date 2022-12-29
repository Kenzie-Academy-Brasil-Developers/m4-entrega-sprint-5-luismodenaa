import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";

export const listUsersService = async () => {
  // const usersRepository = AppDataSource.getRepository(User);

  // const users = usersRepository.find({
  //   select: [
  //     "id",
  //     "email",
  //     "name",
  //     "isActive",
  //     "isAdm",
  //     "createdAt",
  //     "updatedAt",
  //   ],
  // });
  const users = await AppDataSource.createQueryBuilder()
    .select([
      "users.id",
      "users.email",
      "users.name",
      "users.isActive",
      "users.isAdm",
      "users.createdAt",
      "users.updatedAt",
    ])
    .from(User, "users")
    .getMany();

  return users;
};
