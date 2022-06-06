const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB",{ useNewUrlParser: true});

const fruitSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: [true, "Please check your data emtry, no name specified."]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

// create a collection named Fruits(specify the singular name of the collection,
// and mongoose will convert it to plural)
const Fruit = mongoose.model("Fruit", fruitSchema);

//create a fruit document inside the collection
const fruit = new Fruit ({
  name: "Apple",
  rating: 7,
  review: "Pretty solid as a fruit."
});

const personSchema = new mongoose.Schema({
  name: String,
  age: Number
});

const Person = mongoose.model("Person", personSchema);

const person = new Person ({
  name: "John",
  age: 22
});

//fruit.save();

//person.save();

// const banana = new Fruit ({
//   name: "Banana",
//   rating: 5,
//   review: "Good taste."
// });
//
// const orange = new Fruit ({
//   name: "Orange",
//   rating: 9,
//   review: "Full of Vitamin C."
// });

//specify mongoose model and insert
// Fruit.insertMany([banana, orange],function(err){
//   if(err){
//     console.log(err);
//   } else {
//     console.log("Successfully saved all fruits to fruitsDB");
//   }
// });

Fruit.find(function(err, fruits){
  if(err){
    console.log(err);
  } else {

    // close the connection once it's done
    mongoose.connection.close();

    fruits.forEach(function(fruit){
      console.log(fruit.name);
    });
  }


});


//update
Fruit.updateOne({_id: "627a5fadf7bf9ea4652457c5"}, {name:"Orange"},function(err){
  if(err){
    console.log(err);
  } else {
    console.log("Success.");
  }
});

// delete
Fruit.deleteOne({name:"Orange"},function(err){
  if(err){
    console.log(err);
  } else {
    console.log("Success.");
  }
});
