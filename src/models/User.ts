import { usersCollection } from "../mongo.ts";
export default class User {
  id: string;
  name: string;
  email: string;
  password: string;

  constructor({ id = "", name = "", email = "", password = "" }) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
  }

  static async findOne(params: object): Promise<User> {
    const user = await usersCollection.findOne(params);
    user.id = user._id.$oid;
    delete user._id;
    return new User(user);
  }

  async save(): Promise<User> {
    delete this.id;
    const { $oid } = await usersCollection.insertOne(this);
    this.id = $oid;
    return this;
  }
}
