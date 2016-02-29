export const setUrl = (router, country, filters) => {
  const { pre, suf, inf, lin, mod } = filters;
  router.push({
    query: {
      country,
      p: btoa(unescape(encodeURIComponent(pre.join(',')))),
      s: btoa(unescape(encodeURIComponent(suf.join(',')))),
      i: btoa(unescape(encodeURIComponent(inf.join(',')))),
      l: btoa(lin),
      m: btoa(mod),
    },
  });
};
