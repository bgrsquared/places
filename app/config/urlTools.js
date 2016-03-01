export const setUrl = (router, country, filters) => {
  const { pre, suf, inf, lin, mod, reg } = filters;
  const query = {
    country,
    v: '0.1', // url version
    m: btoa(mod),
  };

  if (!mod) {
    query.p = btoa(unescape(encodeURIComponent(pre.join(','))));
    query.s = btoa(unescape(encodeURIComponent(suf.join(','))));
    query.i = btoa(unescape(encodeURIComponent(inf.join(','))));
    query.l = btoa(lin);
  } else {
    query.r = btoa(unescape(encodeURIComponent(reg.toString())));
  }

  router.push({
    pathname: window.location.pathname,
    query,
  });
};
