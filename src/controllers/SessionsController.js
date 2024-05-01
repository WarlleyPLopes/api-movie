<<<<<<< HEAD
<<<<<<< HEAD
const knex = require("../database/knex");
const AppError = require("../utils/AppError");
const { compare } = require("bcryptjs");
const authConfig = require("../config/auth");
const { sign } = require("jsonwebtoken");

class SessionsController {
  async create(request, response) {
    const { email, password } = request.body;

    const user = await knex("users").where({ email }).first();

    if (!user) {
      throw new AppError("E-mail e/ou senha incorreta", 401);
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new AppError("E-mail e/ou senha incorreta", 401);
    }

    const { secret, expiresIn } = authConfig.jwt;
    const token = sign({}, secret, {
      subject: String(user.id),
      expiresIn,
    });

    return response.json({ user, token });
  }
}

module.exports = SessionsController;
=======
=======
>>>>>>> f2bd44168aebbf3db3977017a0e22b592be1f609
class SessionsController {
    async create(request, response){
        const {email,password} = request.body;
        
        return response.json({email, password})
    }
}

<<<<<<< HEAD
module.exports = SessionsController
>>>>>>> f2bd441 (update)
=======
module.exports = SessionsController
>>>>>>> f2bd44168aebbf3db3977017a0e22b592be1f609
