const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const user =  new Schema({
  name: String,
  email: String,
  password: String
});

const Todo = new Schema({
  userId: ObjectId,
  title: String,
  done: Boolean
});

const UserModel = mongoose.model('users', user);
const TodoModel = mongoose.model('Todo', Todo);

module.exports = {
  UserModel: UserModel,
  TodoModel: TodoModel
}
