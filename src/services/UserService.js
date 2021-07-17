import api from "../axios/axios";

export default class UserService {
  static async getUsers() {
    return api.get("/users");
  }
}
