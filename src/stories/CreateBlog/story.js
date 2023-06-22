const knex = requireKnex();
const findKeysFromRequest = requireUtil("findKeysFromRequest");

const prepare = ({ req }) => {
  console.log(process.env)
  const payload = findKeysFromRequest(req, ["email", "blog"]);
  console.log(payload)
  return payload;
};



const authorize = async ({ prepareResult }) => {
return true;
};

const handle = async ({ prepareResult, authorizeResult }) => {
  console.log("handle")
  console.log({prepareResult})
  try {

    // Store in users table
    const currentBlog = await knex("userblogdata")
      .insert({
        email: prepareResult.email,
        blog: prepareResult.blog,
      })
      .returning("*");

      console.log(currentBlog[0]);
    return currentBlog[0];
  } catch (error) {
    throw error
  }
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
