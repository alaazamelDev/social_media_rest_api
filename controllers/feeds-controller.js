exports.index = (req, res, next) => {
  return res.json({ message: "This is the message that you have to read." });
};

exports.store = (req, res, next) => {
  return res.status(201).json({
    message: "This is the message that you have to read.",
    post: {
      id: Date.now(),
      title: "Job Application",
      body: "Here I will be representing my skills and other related things",
    },
  });
};
