module.exports = {
  resolver: {
    Query: {
      alternativeArticles: {
        policies: ["global::altDefaultStatus"],
      },
    },
  },
};
