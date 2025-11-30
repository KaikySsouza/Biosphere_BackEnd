import Sequelize, { Model } from "sequelize";
import bcryptjs from 'bcryptjs'

import Sequelize, { Model } from "sequelize";

export default class User extends Model {

  static init(sequelize) {
    super.init({
      nome_completo:{
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args:[5, 255],
            msg: 'Campo nome não pode ficar vazio',
          }
        }
      },
      
      cpf: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'CPF já cadastrado...'
        },
      },


        email:{
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Email já existente no banco de dados...'
        },
        validate: {
          isEmail: {
            msg: 'Está email é invalido'
          }
        }
      },

      telefone: {
      type: Sequelize.STRING,
      defaultValue: '',
      },

      idade: {
        type: Sequelize.STRING,
      },

      genero: {
        type: Sequelize.STRING
      },

      endereco: {
        type: Sequelize.STRING,
      },

      numero: {
        type: Sequelize.STRING,
      },

        password_hash: {
          type: Sequelize.STRING,
          defaultValue: '',
        },

        password: {
        type: Sequelize.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args:[6, 15],
            msg: 'A senha precisa ter entre 6 e 15 caracteres',

          }
        }
      },

    }, {
      sequelize,
    });
    this.addHook('beforeSave', async (user) =>  {
      if(user.password) {
        user.password_hash = await bcryptjs.hash(user.password, 8);
      }
    })

    return this;
  }

  passwordIsValid(password) {
    return bcryptjs.compare(password, this.password_hash)
  }
}
