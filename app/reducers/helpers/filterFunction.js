export const filteredData = (data, obj, link) => {
  const { start, end, any } = obj;
  const regexpText = [];
  if (start.size) {
    regexpText.push('^(' + Array.from(start).join('|') + ')');
  }
  if (any.size) {
    regexpText.push('(' + Array.from(any).join('|') + ')');
  }
  if (end.size) {
    regexpText.push('(' + Array.from(end).join('|') + ')$');
  }

  const joiner = (link === 'AND' ? '.*' : '|');

  let myRegexp = new RegExp(
    regexpText.join(joiner), 'i');

  if (!(start.size + any.size + end.size)) {
    myRegexp = new RegExp('.*', 'i');
  }

  const filterFunction = str => str.name.match(myRegexp);
  return {
    fT: data.filter(filterFunction),
    regExp: myRegexp,
  };
};

export const filteredDataRegExp = (data, regExp) => {
  return data.filter(s => s.name.match(regExp));
};
