import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

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
  phone: number;

  @Column()
  cellphone: number;

  @ManyToOne((type) => Client, (client) => client.contacts, { eager: true })
  client: Client[];
}
