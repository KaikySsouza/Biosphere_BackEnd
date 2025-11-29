import Sequelize, { Model } from "sequelize";

export default class Paciente extends Model {

  static init(sequelize) {
    super.init({
      nome: Sequelize.STRING,
      sobrenome: Sequelize.STRING,
      email: Sequelize.STRING,
      idade: Sequelize.INTEGER,
      cpf: Sequelize.STRING,

    }, {

      sequelize,
    });
    return this;
  }
}
