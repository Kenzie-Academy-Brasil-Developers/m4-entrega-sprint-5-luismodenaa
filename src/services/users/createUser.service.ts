import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";
import { IUser, IUserRequest } from "../../interfaces/users";
import { removingUserPasswordSerializer } from "../../serializers/user.serializers";

const createUserService = async (userData: IUserRequest): Promise<IUser> => {
  const userRepository = AppDataSource.getRepository(User);
  const createdUser = userRepository.create(userData);
  await userRepository.save(createdUser);

  const removingUserPassword = await removingUserPasswordSerializer.validate(
    createdUser,
    {
      stripUnknown: true,
    }
  );

  return removingUserPassword;
};

export default createUserService;
