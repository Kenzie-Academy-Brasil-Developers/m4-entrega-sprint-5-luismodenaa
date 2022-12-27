import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Propertie from "./propertie.entity";
import User from "./user.entity";

@Entity("schedules_users_properties")
class ScheduleUser {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column({ type: "date" })
  date: string;

  @Column({ type: "time" })
  hour: string;

  @ManyToOne(() => Propertie)
  propertyId: Propertie;

  @ManyToOne(() => User, { eager: true })
  userId: User;
}

export default ScheduleUser;
