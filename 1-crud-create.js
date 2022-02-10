// import/require the model

// CONNECT YOUR APP TO THE MONGODB
require('./configs/database.config');

// ****************************************************************************************************
// ****************************************************************************************************
// Create new cats (insert document in the DB (uses insertOne() and insertMany()))
// ----------------------------------------------------------------------------

// .create() is a mongoose method and under the hood uses insertOne and insertMany

// create one document in the cats collection
Cat.create({
    name: "Garfield",
    age: "13",
    color: "orange",
    
    friends: ["Marco","Carol","Carlos"] //<---- this would brake the monotype since this property it's not in the schema. Mongo won't complain
})

// create multiple documents in the cats collection

Cat