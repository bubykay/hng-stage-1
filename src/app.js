import express from "express";
import cors from "cors";
import apiRoutes from "./routes/apiRoutes.js";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./utils/swaggerConfig.js";

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
    this.errorHandler();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  routes() {
    this.app.use("/api", apiRoutes);
    this.app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  }

  errorHandler() {}

  getServer() {
    return this.app;
  }
}

export default new App().getServer();
