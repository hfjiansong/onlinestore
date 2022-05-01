const { getReqData, headers } = require("../utils/utils");

const prodcutRoutes = async (req, res, controllerWithCollection) => {
  //    /api/products : GET
  if (req.url === "/api/products" && req.method === "GET") {
    const products = await controllerWithCollection.getProducts();
    res.writeHead(200, headers);
    res.end(JSON.stringify(products));
  }

  // /api/products/:name : GET
  else if (
    req.url.match(/\/api\/products\/([a-zA-Z0-9]+)/) &&
    req.method === "GET"
  ) {
    try {
      const name = req.url.split("/")[3];
      const product = await controllerWithCollection.getProduct(name);

      res.writeHead(200, headers);
      res.end(JSON.stringify(product));
    } catch (error) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: error }));
    }
  }

  // /api/products/ : POST
  else if (req.url === "/api/products" && req.method === "POST") {
    let product_data = await getReqData(req);
    let product = await controllerWithCollection.createProduct(
      JSON.parse(product_data)
    );

    res.writeHead(200, headers);
    res.end(JSON.stringify(product));
  }
};

module.exports = prodcutRoutes;
