import User from "../models/User";

class UserController {
 async  create(req, res) {
    const novoUser = await User.create({
      nome: 'Diego',
      email: 'otavio@gmail.com',
      password: '34424324'
    })
    res.json(novoUser)
  }
}

export default new UserController();
