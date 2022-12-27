import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import Propertie from "./propertie.entity";

@Entity("adresses")
class Address {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ nullable: false })
  district: string;

  @Column({ nullable: false })
  zipCode: string;

  @Column()
  number: string;

  @Column({ nullable: false })
  city: string;

  @Column({ nullable: false })
  state: string;

  @OneToOne(() => Propertie)
  @JoinColumn()
  propertie: Propertie;
}

export default Address;
