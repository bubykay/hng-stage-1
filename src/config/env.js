import dotenv from "dotenv";
import { getEnvVariable } from "../utils/index.js";
dotenv.config();

export default {
  port: getEnvVariable("port"),
  swaggerDomain: getEnvVariable("swagger_domain"),
  nodeEnv: getEnvVariable("node_env"),
  isProduction: getEnvVariable("is_production"),
};
