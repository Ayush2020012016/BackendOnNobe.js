const Config = require("../config")();
const endpoints = Config.load(Config["endpoints"]);
const responseKey = Config["responseKey"];
const generateApiPath = requireUtil("generateApiPath");
// console.log({Config,endpoints,responseKey,generateApiPath})
module.exports = function (app) {
  const apis = endpoints(app);
  console.log({apis})
  
  apis.forEach((api) => {
    // console.log(api.endpoints)
    api.endpoints.forEach((endpoint, i) => {
      // console.log("endpoint", endpoint);

      let apiPath = generateApiPath(api, endpoint);
      // console.log({apiPath})
      // console.log({app,endpoint})
      // console.log(endpoint[0])
      // console.log("endpoint[0]", `${app[endpoint[0]]}`);

      app[endpoint[0]](apiPath, async (req, res, next) => {
        let result = await endpointStrategy(endpoint[2], {
          req,
          res,
          next,
          reqBody: req.body,
          reqParams: req.params,
          reqQuery: req.query,
          reqHeaders: req.Headers,
        });
      
        return res.code(200).send(result[responseKey]);
      });
    });
  });
};
