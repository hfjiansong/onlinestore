const { getReqData, headers } = require("../utils/utils");

const prodcutRoutes = async (req, res, controllerWithCollection) => {
  //  /api/users/ : POST
  if (req.url === "/api/users" && req.method === "POST") {
    try {
      let user_data = await getReqData(req);
      let user = await controllerWithCollection.createUser(
        JSON.parse(user_data)
      );

      res.writeHead(200, headers);
      res.end(JSON.stringify(user));
    } catch (error) {
      console.log(error);
    }
  }
};

module.exports = prodcutRoutes;
