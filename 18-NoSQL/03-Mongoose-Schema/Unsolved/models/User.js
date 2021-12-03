const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  // Add these four attributes to your schema: username, password, email, userCreated
  // YOUR CODE HERE
  //
  userName: {
    type: String,
    trim: true,
    require: "User Name is required",
  },
  password: {
    type: String,
    trim: true,
    require: true,
    unique: true,
    validate: [({ length }) => length >= 6, "Password should be longer."],
  },
  email: {
    type: String,
    required: "You must enter an email!",
    match: [/.+@.+\..+/, "Please enter a valid e-mail address!"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = model("User", UserSchema);

module.exports = User;
