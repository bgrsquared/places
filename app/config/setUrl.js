export const setUrl = (router, country, filters) => {
  const { pre, suf, inf } = filters;
  router.push({
    query: {
      country,
      prefix: pre.join(','),
      suffix: suf.join(','),
      infix: inf.join(','),
    },
  });
};
