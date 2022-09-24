const { validationResult } = require("express-validator");

// models
const Post = require("../models/post");

exports.index = (req, res, next) => {
  return res.json({
    message: "This is the message that you have to read.",
    posts: [
      {
        _id: Date.now(),
        title: "First Post",
        creator: { name: "Alaa Zamel" },
        imageUrl: "images/image.jpg",
        content:
          "This is the first article I used to express how happy I am to get the things done",
        createdAt: new Date(),
      },
    ],
  });
};

exports.store = (req, res, next) => {
  // handle validation result
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({
      message: "Please validate your input.",
      errors: errors.array(),
    });
  }

  // get the data out of th request body
  console.log(req.body);
  const title = req.body.title;
  const content = req.body.content;

  const post = new Post({
    title: title,
    content: content,
    imageUrl: "images/image.jpg",
    creator: { name: "Alaa Zamel" },
  });

  post
    .save()
    .then((result) => {
      res.status(201).json({
        post: result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
