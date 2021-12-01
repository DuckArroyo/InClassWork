const { Schema, Types } = require("mongoose");

const noteSchema = new Schema({
  noteId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  noteText: {
    type: String,
    require: true,
  },
});

module.exports = noteSchema;
