const userController = (collection) => {
  return {
    async createUser(user) {
      const users = await collection.find({ email: user.email }).toArray();
      if (users.length) {
        return {
          isErrored: true,
          msg: "Email has been used.",
        };
      }

      return collection.insertOne(user);
    },
  };
};

module.exports = userController;
