import { compare } from "bcryptjs";
import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";
import AppError from "../../errors/AppError";
import ISessionRequest from "../../interfaces/sessions";
import jwt from "jsonwebtoken";
import "dotenv/config";

const loginSessionService = async (data: ISessionRequest) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({
    email: data.email,
  });

  if (!user) {
    throw new AppError("Usuário ou senha incorretos", 403);
  }

  if (!user.isActive) {
    throw new AppError("Usuário ou senha incorretos", 400);
  }

  const passwordMatch = await compare(data.password, user.password);

  if (!passwordMatch) {
    throw new AppError("Usuário ou senha incorretos", 403);
  }

  const token = jwt.sign(
    {
      adm: user.isAdm,
    },
    process.env.SECRET_KEY,
    {
      subject: String(user.id),
      expiresIn: "2h",
    }
  );

  return token;
};

export default loginSessionService;
