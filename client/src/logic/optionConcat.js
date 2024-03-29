function optionConcat(name, checked, range, count, problemStyle) {
  const options = {};
  const operatorArr = [];
  const urlName = name.split(" ").join("");

  options.name = name;
  options.urlName = urlName;
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
