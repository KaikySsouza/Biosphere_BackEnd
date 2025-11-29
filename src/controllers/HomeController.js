import Paciente from "../models/Paciente";

class HomeController {
  async index(req, res) {
    const novoPaciente = await Paciente.create({
      nome: 'Luiz',
      sobrenome: 'otavio',
      email: 'kaikysouza32@gmail.com',
      idade: 13,
      cpf: '223.213.132-34'
    })
    res.json(novoPaciente)
  }
}

export default new HomeController();
