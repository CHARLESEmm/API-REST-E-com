import CoreRoutes from "./Core.routes.js";
import "dotenv/config";
import usersController from "../controllers/users.controller.js";

const api = process.env.API_URL;

export default class UsersRoutes extends CoreRoutes {
  constructor() {
    super();
  }

  defineRoutes() {
    this.routes("get", `${api}/users/login`, usersController.login);

    this.routes("get", `${api}/users`, usersController.allUser);
    this.routes("get", `${api}/users/:id`, usersController.oneUser);

    this.routes("post", `${api}/users/register`, usersController.createUser);

    this.routes("patch", `${api}/users/:id`, usersController.updateUser);

    this.routes("delete", `${api}/users/:id`, usersController.deleteUser);
  }
}
