import Sequelize  from "sequelize";
import databaseConfig from '../config/database'
import Paciente from "../models/Paciente";
import User from "../models/User";

const models = [Paciente, User];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));

