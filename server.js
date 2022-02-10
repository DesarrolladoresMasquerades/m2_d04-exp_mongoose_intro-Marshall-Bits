require('dotenv/config');
require('./configs/database.config');

const Cat = require("./models/Cat.model")

Cat.find(
    {
        age: {$gt: 0},
        color: {$in: ["white","orange"]},
        friends: {$elemMatch: {$eq: "marco"}}
    }
)

  .then((cats) => cats.forEach((cat) => console.log(cat)))
  .catch((error) => console.log(error));
 
//Cat.findOneAndUpdate() it's dangerous because it will update 

Cat.findByIdAndUpdate("6205021c2ea146b6cb21e663", 
{$set: {name: "Lana"}},
).catch((error)=>console.log(error));
