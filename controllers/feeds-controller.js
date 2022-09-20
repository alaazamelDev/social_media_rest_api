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
  return res.status(201).json({
    message: "This is the message that you have to read.",
  });
};
