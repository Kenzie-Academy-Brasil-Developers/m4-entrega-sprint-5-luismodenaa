import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import Address from "./address.entity";
import Category from "./category.entity";
import ScheduleUser from "./scheduleUser.entity";

@Entity("properties")
class Propertie {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ default: "false" })
  sold: boolean;

  @Column({ nullable: false })
  value: number;

  @Column({ nullable: false })
  size: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(() => Address)
  @JoinColumn()
  addressId: Address;

  @ManyToOne(() => Category, { eager: true, nullable: true })
  categoryId: Category;

  @OneToMany(() => ScheduleUser, (schedule) => schedule.propertyId)
  schedule: ScheduleUser[];
}

export default Propertie;
