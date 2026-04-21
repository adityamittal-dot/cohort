const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/todo-app"); // Add your actual MongoDB connection string here


const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const user =  new Schema({
  name: String,
  email: {type: String, unique: true},
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
