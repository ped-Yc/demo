Function.prototype.myCall = function (context) {
  var context = context || window;
  context.fn = this;
  var args = [...arguments].slice(1);
  var result = context.fn(...args);
  delete context.fn;
  return result;
};

let a = {
  value: 1,
};
function getValue(name, age) {
  console.log(name);
  console.log(age);
  console.log(this.value);
}
getValue.myCall(a, "mei", "24"); // mei 24 1; 立即执行
getValue.apply(a, ["li", "24"]); // li 24 1；立即执行
getValue.bind(a)("mei", "24"); // mei 24 1；('mei', '24')这部分才是执行函数
getValue.bind(a)(["li", "24"]); // ['li', '24'] undefined 1；(['li', '24'])才是执行函数
