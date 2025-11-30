import User from "../models/User";

class UserController {
  async  create(req, res) {
   try {
    const novoUser = await User.create(req.body)
    return  res.json(novoUser)
  }catch(e) {
    console.log(e)
    return res.status(400).json({
     errors: e.errors.map((err) => err.message)
    });
  }
 }

 // Index

 async index (req, res) {
  try {
    const users = await User.findAll();
    return res.json(users)
  } catch(e) {
    return res.json(null)
  }
 }

 // Show
 async show (req, res) {
  try {
    const user = await User.findByPk(req.params.id);
    return res.json(user)
  } catch(e) {
    return res.json(null)
  }
 }

 // Update
 async update(req, res) {
  try {
    if(!req.params.id) {
      return res.status(400).json({
        errors: ['ID não enviado. '],
      });
    }

    const user = await User.findByPk(req.params.id);

     if(!user) {
      return res.status(400).json({
        errors: ['Usuário não existe. '],
      });
    }

   const novosDados = await user.update(req.body);
    return res.json(novosDados)

  } catch(e) {
      return res.status(400).json({
     errors: e.errors.map((err) => err.message) //corrigir bug está alterando mas não está caindo na mensagem de email existente, aparece somente null.
    });
 }
}

 // Delete

  async delete(req, res) { // arrumar erro para deletar não está encontranto caminho
  try {
    if(!req.params.id) {
      return res.status(400).json({
        errors: ['ID não enviado.'],
      });
    }

    const user = await User.findByPk(req.params.id);

     if(!user) {
      return res.status(400).json({
        errors: ['Usuário não existe. '],
      });
    }

    await user.destroy();
    return res.json(null)
  } catch(e) {
    console.log(e)
      return res.status(400).json({
     errors: e.errors.map((err) => err.message)
    });
 }
}
}

export default new UserController();
