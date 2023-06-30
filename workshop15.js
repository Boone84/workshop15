// creat an object named customer
// create keys
// create values


const customer = {
    firstName: `jake`,
    lastName: `smith`,
    email: `jaekSmih!aol.com`,
    phone: undefined,
    zipCode: 631,
    favoritFlavors: 32,
    cupSize: `medium`,
    favoriteStore: `Target`,
    firstVisit: false,
}

// fix mistakes using bracket notations
    // replace email
    // add phonenumber
    // fix zipcode
    // add favorite flavors

customer[`email`] = `jakesmith@aol.com`;
customer[`phone`] = `319-555-1234`;
customer[`zipCode`] = `63132`;
customer[`favoriteFlavors`] = [`coffee`, `strawberry`, `matcha`];

//delete zipcode
delete customer.zipCode;
//delete favorite store

// add 3 new keys
    //toppings
    //futureFlavors
    //todaysPurchaceCost
    
customer.toppings = [`chocolate sprinkles`, `water straws`, `gummy bears`];
customer.futureFlavors = `mango`;
customer.todaysPurchaceCost = 5.32;


// print keys in array

keys = [
    `firstName`,
    `lastName`,
    `email`,
    `phone`,
    `favoriteFlavors`,
    `cupSize`,
    `firstVisit`,
    `toppings`,
    `futureFlavors`,
    `todaysPurchaceCost`,
]


console.log(keys)

// console.log(customer);