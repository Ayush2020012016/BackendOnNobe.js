module.exports = (app) => {
  app.get("/liveness", async (req, res) => {
    return res.code(200).send({ status: "I am alive" });
  });

  app.get("/readiness", async (req, res) => {
    return res.code(200).send({ status: "I am ready" });
  });

  app.post("/mirror", async (req, res) => {
    return res.code(200).send(req.body);
  });

  return [
    {
      endpoints: [
        ["post", "/registerblog", "CreateBlog"],
        ["get", "/getblogs", "GetAllBlogs"],
        ["get", "/getblog/:id", "GetBlogbyId"],
        ["put","/update/:id","Updateblog"],
        ["delete","/delete/:id","Deleteblog"],


      ],
    },
  ];
};
