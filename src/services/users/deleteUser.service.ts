import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";
import AppError from "../../errors/AppError";

export const deleteUserService = async (userId: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ id: userId });

  if (user && user.isActive) {
    await userRepository.update(userId, { isActive: false });
    return {};
  }

  if (user && user.isActive === false) {
    throw new AppError("Este usuário já está deletado", 400);
  }

  throw new AppError("Usuário não encontrado", 404);
};
