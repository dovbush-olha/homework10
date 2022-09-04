//task1
let arr = ["Tom", "Sam", "Ray", "Bob"];
let [x, y, , ...z] = arr;

//task2

let data = {
  names: ["Tom", "Sam", "Ray", "Bob"],
  ages: [20, 24, 22, 26],
};

let {
  names: [name1, name2, name3, name4],
  ages: [age1, age2, age3, age4],
} = data;

//task3
function mul(...rest) {
  const isNumber = rest.some((item) => typeof item === "number");
  if (!isNumber) return 0;
  let result = 1;
  rest.forEach((item) => {
    if (typeof item === "number") {
      result *= item;
    }
  });
  return result;
}

//task4
let server = {
  data: 0,
  convertToString: function (callback) {
    callback(() => {
      return this.data + "";
    });
  },
};

let client = {
  server: server,
  result: "",
  calc: function (data) {
    this.server.data = data;
    this.server.convertToString(this.notification());
  },
  notification: function () {
    return (callback) => {
      this.result = callback();
    };
  },
};

//task5
function mapBuilder(keysArray, valuesArray) {
  let map = new Map();
  for (let i = 0; i < keysArray.length; i++) {
    map.set(keysArray[i], valuesArray[i]);
  }
  return map;
}
