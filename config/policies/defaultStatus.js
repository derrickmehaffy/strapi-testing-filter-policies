module.exports = async (ctx, next) => {
  if (!ctx.query.status) {
    ctx.query.status = "production";
  }

  await next();
};
