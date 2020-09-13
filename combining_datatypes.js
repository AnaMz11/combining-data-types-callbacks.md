

//_____________________________________________________________________
//      SECTION 2 COMBINING OBJECTS, ARRAYS, AND FUNCTIONS
//_____________________________________________________________________

// Create an object, called crayonBox, that has a property that is an array. The array should have the names of some crayons. Log one of the elements of that array.

const crayonBox = ["orange","black","blue","yellow"]

console.log(crayonBox[2]);

//Create an object bottle that has a property that is an object: cap. cap can have properties like material: 'metal' or 'plastic', color: blue or white etc. Log one of the properties of that inner object

const bottle = {name: "cap", material: "plastic", color: "red"}

console.log(bottle.material);

//Create an array called receipt that has at least one object in it. The inner objects should be items that have a name and a price. Log one of the properties of that inner object.


const receipt =[ 
  {item: "water", price: "$5"},
  {item: "milk", price: "$2.50"},
  {item: "fruit", price: "$6"},
]

console.log(receipt[1].item)

//Create an array called apartmentBuilding that has an array as one of its elements, the inner array should be the names of the tenants. Log one of the elements of the inner array.

const apartmentBuilding = [
  {tenants:["Lisa", "Rob", "Lucy"]}
];

console.log(apartmentBuilding[0].tenants[2])
