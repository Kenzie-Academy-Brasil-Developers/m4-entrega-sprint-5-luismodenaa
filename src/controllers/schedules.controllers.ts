import { Request, Response } from "express";
import { IScheduleRequest } from "../interfaces/schedules";
import createScheduleService from "../services/schedules/createSchedule.service";
import listSchedulesService from "../services/schedules/listSchedules.service";

export const createScheduleController = async (req: Request, res: Response) => {
  const data: IScheduleRequest = req.body;
  const createdSchedule = await createScheduleService(data);
  return res.status(201).json(createdSchedule);
};

export const listSchedulesController = async (req: Request, res: Response) => {
  const listSchedule = await listSchedulesService(req.params.id);
  return res.status(200).json(listSchedule);
};
