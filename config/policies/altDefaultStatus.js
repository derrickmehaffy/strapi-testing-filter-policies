module.exports = async (ctx, next) => {
  if (!ctx.query["status.uid"]) {
    ctx.query["status.uid"] = "production";
  }

  await next();
};
