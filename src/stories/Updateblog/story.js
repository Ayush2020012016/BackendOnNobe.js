const knex = requireKnex();

const prepare = ({ req }) => {
  console.log(req.body.blog);
  const payload = {id:req.params.id,blog:req.body.blog};
  console.log(payload)
  return payload;

};

const authorize = async ({ prepareResult }) => {
 return true;
};

const handle = async ({ prepareResult, authorizeResult }) => {
  console.log("handle")
  console.log(prepareResult);
  let currentBlog;
  try {
   currentBlog = await knex("userblogdata")
   .where("id",prepareResult.id)
   .update({blog:prepareResult.blog});
} catch (error) {
  throw error
}
  
  return currentBlog
};

const respond = async ({ handleResult }) => {
  try {
    return handleResult;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  prepare,
  authorize,
  handle,
  respond,
};