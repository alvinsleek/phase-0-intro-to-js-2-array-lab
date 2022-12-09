// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}
function destructivelyPrependCat(name){
    cats.unshift(name)
}

function destructivelyRemoveLastCat(name){
    cats.pop();
}
function destructivelyRemoveFirstCat(name){
    cats.shift(name);
}


function appendCat(name) {
    const newCats = [...cats, name];
    return newCats;
}
function prependCat(name){
    const newCats = [name, ...cats];
    return preCats;
}

function removeFirstCat(Cole){
    return cats.slice(0,cats.length - 1);
}
console.log(removeFirstCat())

function removeFirstCat(name) {
    return cats.slice(1);
}
    

