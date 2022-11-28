// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push("Cole");
function destructivelyAppendCat(){
    cats.push("Cole")
}

function destructivelyPrependCat(name){
function destructivelyPrependCat(){
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat(name){
function destructivelyRemoveLastCat(){
    cats.pop("Garfield")
}

function destructivelyRemoveFirstCat(name){
function destructivelyRemoveFirstCat(){
    cats.shift("Milo")
}

function removeFirstCat(Cole){
    var newArray = cats.slice();
    newArray.shift(Cole)
    return newArray
}
