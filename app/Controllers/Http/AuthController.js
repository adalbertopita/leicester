'use strict'

const User = use("App/Models/User");

class AuthController {
	async signup({ request }) {
		const data = request.only(["email", "password"]);

		await User.create(data);

		return "done";
	}
	
	async login({ request, auth }) {
		const { email, password } = request.all();

		const token = await auth.attempt(email, password);

		return token

	}
}

module.exports = AuthController
