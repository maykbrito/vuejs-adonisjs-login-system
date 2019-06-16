const User = use('App/Models/User');

class UserController {
  async index() {
    return User.all();
  }

  async login({ request, auth }) {
    const { email, password } = request.all();

    const token = await auth.attempt(email, password);

    return token;
  }

  async register({ request }) {
    const { email, password } = request.all();

    const user = await User.create({
      email,
      password,
    });

    return user;
  }

  show({ params }) {
    return User.findOrFail(params.id);
  }
}

module.exports = UserController;
