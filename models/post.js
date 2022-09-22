const mongoose = require("mongoose");
const { Schema } = mongoose;

// create post schema object
const postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});
