export const setUrl = (router, country, filters) => {
  const { pre, suf, inf } = filters;
  router.push({
    query: {
      country,
      p: pre.join(','),
      s: suf.join(','),
      i: inf.join(','),
    },
  });
};
