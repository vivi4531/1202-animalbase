"use strict";

window.addEventListener("DOMContentLoaded", start);

const allAnimals = [];
const Animal = {
  name: "",
  type: "",
  desc: "",
  age: 0,
};

function start( ) {
    console.log("ready");

    loadJSON();
}


function loadJSON() {
    fetch("animals.json")
    .then( response => response.json() )
    .then( jsonData => {
        // when loaded, prepare objects
        prepareObjects( jsonData );
    });
}

function prepareObjects( jsonData ) {
    jsonData.forEach( jsonObject => {
        // TODO: Create new object with cleaned data - and store that in the allAnimals array
        
//Create new object       
const animalTemplate = {
    name: "",
    type: "-unknown-",
    desc: "",
    age: 0,
};
        // TODO: MISSING CODE HERE !!!

//Split "fullname" into smaller parts after each space. So we get name, type, description and age
const splitFullName = jsonObject.fullname.split(" "); 

//Create the new object from the empty object template 
const animal = Object.create(animalTemplate); 

//Insert value/string/substring into place 
//Name inserts in index 0 
animal.name = splitFullName[0]; 

//Type inserts in index 3
animal.type = splitFullName[3]; 

//Description inserts in index 2
animal.desc = splitFullName[2]; 

//Age is already a seperate string so just adds the age to the object
animal.age = jsonObject.age; 

//Adds all objects (animals) into the array
allAnimals.push(animal); 

//console.log(animal.name); 
//console.log(animal.type); 
//console.log(animal.desc); 
//console.log(animal.age); 

    });

    displayList();
}

function displayList() {
    // clear the list
    document.querySelector("#list tbody").innerHTML = "";

    // build a new list
    allAnimals.forEach( displayAnimal );
}

function displayAnimal( animal ) {
    // create clone
    const clone = document.querySelector("template#animal").content.cloneNode(true);

    // set clone data
    clone.querySelector("[data-field=name]").textContent = animal.name;
    clone.querySelector("[data-field=desc]").textContent = animal.desc;
    clone.querySelector("[data-field=type]").textContent = animal.type;
    clone.querySelector("[data-field=age]").textContent = animal.age;

    // append clone to list
    document.querySelector("#list tbody").appendChild( clone );
}


