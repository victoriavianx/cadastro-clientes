import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";

import { Client } from "./client.entity";

@Entity("contacts")
export class Contact {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  name: string;

  @Column()
  lastname: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  cellphone: string;

  @ManyToOne((type) => Client, (client) => client.contacts, { eager: true })
  client: Client[];
}
