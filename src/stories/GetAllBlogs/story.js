const knex = requireKnex();

const prepare = ({ reqQuery, reqBody, reqParams, req }) => {
  return {};
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