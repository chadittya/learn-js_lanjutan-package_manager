import moment from "moment";

console.log("Hello world from JS");
console.log(moment().startOf("day").fromNow());

const name = "bob",
  time = "today";
console.log(`hello ${name}, how are you ${time}?`);
