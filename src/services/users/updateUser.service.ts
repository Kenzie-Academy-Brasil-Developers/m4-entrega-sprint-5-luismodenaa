import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";
import AppError from "../../errors/AppError";
import { IUser, IUserUpdate } from "../../interfaces/users";
import { removingUserPasswordSerializer } from "../../serializers/user.serializers";

const updateUserService = async (
  userData: IUserUpdate,
  userId: string
): Promise<IUser> => {
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({
    id: userId,
  });

  if (!findUser) {
    throw new AppError("Usuário inválido", 404);
  }

  const updatedUser = userRepository.create({
    ...findUser,
    ...userData,
  });

  await userRepository.save(updatedUser);

  const removingUserPassword = await removingUserPasswordSerializer.validate(
    updatedUser,
    {
      stripUnknown: true,
    }
  );

  return removingUserPassword;
};

export default updateUserService;
