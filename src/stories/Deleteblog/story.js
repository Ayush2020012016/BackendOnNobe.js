const knex = requireKnex();

const prepare = ({ req }) => {
  const payload = req.params.id;
  console.log(payload);
  return payload;

};



const authorize = async ({ prepareResult }) => {
return true;
};

const handle = async ({ prepareResult, authorizeResult }) => {
  let currentBlog;
  try {
   currentBlog = await knex("userblogdata").select().where("id",prepareResult).del()
  
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
