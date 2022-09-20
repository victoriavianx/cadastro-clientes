import app from "./app";
import { AppDataSource } from "./data-source";

const init = () => {
  async () => {
    await AppDataSource.initialize().catch((err) => {
      console.error("Error during Data Source initialization", err);
    });
  };

  app.listen(3001, () => {
    console.log("App running at http://localhost:3001");
  });
};

init();
