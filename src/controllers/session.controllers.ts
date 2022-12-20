import { Request, Response } from "express";
import ISessionRequest from "../interfaces/sessions";
import loginSessionService from "../services/sessions/loginSession.service";

export const loginSessionController = async (req: Request, res: Response) => {
  const sessionData: ISessionRequest = req.body;
  const token = await loginSessionService(sessionData);
  return res.json({ token });
};
