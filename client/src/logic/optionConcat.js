function optionConcat(name, checked, range, count, problemStyle) {
  const options = {};
  const operatorArr = [];
  options.name = name;
  options.min = parseInt(range.min);
  options.max = parseInt(range.max);
  options.count = count;
  options.problemStyle = problemStyle;
  for (const [key, value] of Object.entries(checked)) {
    if (value) {
      operatorArr.push(key);
    }
  }
  options.operators = operatorArr;
  return options;
}

export default optionConcat;
