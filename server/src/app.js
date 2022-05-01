const http = require("http");

const connectToDb = require("./db/database");
const productController = require("./controllers/productController");
const userController = require("./controllers/userController");
const prodcutRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");

const PORT = process.env.PORT || 2345;

const server = http.createServer(async (req, res) => {
  const db = await connectToDb();

  const productCollection = db.collection("products");
  const userCollection = db.collection("users");

  const productControllerWithCollection = await productController(
    productCollection
  );
  const userControllerWithCollection = await userController(userCollection);

  prodcutRoutes(req, res, productControllerWithCollection);
  userRoutes(req, res, userControllerWithCollection);

});

server.listen(PORT, () => {
  console.log(`server started on port: ${PORT}`);
});
