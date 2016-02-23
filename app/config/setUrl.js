export const setUrl = (router, country, filters) => {
  const { pre, suf, inf } = filters;
  router.push({
    query: {
      country,
      p: btoa(pre.join(',')),
      s: btoa(suf.join(',')),
      i: btoa(inf.join(',')),
    },
  });
};
