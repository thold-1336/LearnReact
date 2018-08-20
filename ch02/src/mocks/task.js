const uuidv4 = require('uuid/v4');

let tasks = [
  {
    id: uuidv4(),
    name: "Learn React",
    level: 2,// Small, 1 Medium, 2 High
  },
  {
    id: uuidv4(),
    name: "Learn JS",
    level: 0,
  },
  {
    id: uuidv4(),
    name: "Learn English",
    level: 1,
  },
  {
    id: uuidv4(),
    name: "Learn Japan",
    level: 0,
  },
];

export default tasks;
