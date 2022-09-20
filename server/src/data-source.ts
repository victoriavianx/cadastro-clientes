import { DataSource } from "typeorm";
import "reflect-metadata";
import "dotenv/config";

const { NODE_ENV, POSTGRES_USER, POSTGRES_PWD, POSTGRES_DB } = process.env;

export const AppDataSource =
  NODE_ENV === "test"
    ? new DataSource({
        type: "sqlite",
        database: ":memory:",
        entities: ["src/entities/*.ts"],
        synchronize: true,
      })
    : new DataSource({
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: POSTGRES_USER,
        password: POSTGRES_PWD,
        database: POSTGRES_DB,
        synchronize: false,
        logging: true,
        entities: ["src/entities/*.ts"],
        migrations: ["src/migrations/*.ts"],
      });
