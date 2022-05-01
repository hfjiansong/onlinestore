const productController = (collection) => {
  return {
    getProducts() {
      return collection.find({}).toArray();
    },
    getProduct(name) {
      return collection.find({ name }).toArray();
    },
    createProduct(product) {
        return collection.insertOne(product)
    },
  };
};

module.exports = productController;
