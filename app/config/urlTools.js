export const setUrl = (router, country, filters) => {
  const { pre, suf, inf, lin, mod, reg } = filters;
  router.push({
    query: {
      country,
      v: '0.1', // url version
      p: btoa(unescape(encodeURIComponent(pre.join(',')))),
      s: btoa(unescape(encodeURIComponent(suf.join(',')))),
      i: btoa(unescape(encodeURIComponent(inf.join(',')))),
      l: btoa(lin),
      m: btoa(mod),
      r: btoa(unescape(encodeURIComponent(reg.toString()))),
    },
  });
};
