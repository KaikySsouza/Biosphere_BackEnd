import Sequelize, { Model } from "sequelize";

export default class Paciente extends Model {

  static init(sequelize) {
    super.init({
      nomecompleto: Sequelize.STRING,
      cpf: Sequelize.STRING,
      email: Sequelize.STRING,
      idade: Sequelize.INTEGER,
      genero: Sequelize.STRING,
      endereco: Sequelize.STRING,
      numero: Sequelize.INTEGER

    }, {

      sequelize,
    });
    return this;
  }
}
