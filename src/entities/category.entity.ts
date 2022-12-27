import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Propertie from "./propertie.entity";

@Entity("categories")
class Category {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ nullable: false, unique: true })
  name: string;

  @OneToMany(() => Propertie, (propertie) => propertie.categoryId)
  properties: Propertie;
}

export default Category;
