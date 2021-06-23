module.exports = {
  resolver: {
    Query: {
      articles: {
        policies: ["global::defaultStatus"],
      },
    },
  },
};
