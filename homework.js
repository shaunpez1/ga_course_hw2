var animalsList = ["Cat", "Dog", "Polar Bear", "Grizzly Bear", "Antelope", "Kangaroo", "Bear"];

// Constructor
function Animals (animalsListing){
  this.animals = animalsListing;
}

// Return animals that have 3 letters
Animals.prototype.animalThreeLetters = function(){
  return this.animals.filter(function(animal) {
    return animal.length == 3;
  });
}

// Return animals that have 2 words
Animals.prototype.animalTwoWords = function(){
  return this.animals.filter(function(animal) {
    var pattern = /[A-z]+ [A-z]+/i;
    return pattern.test(animal);
  });
}

// Return animals that don't have first letter contains k
Animals.prototype.animalwithoutK = function(){
  return this.animals.filter(function(animal) {
    var pattern = /^k/i;
    return !pattern.test(animal);
  });
}

// Return animal named Teddy Bear to bear
Animals.prototype.teddyToBear = function(){
  return this.animals.map(function(animal) {
    return animal.replace(/bear/i, "Teddy Bear");
  });
}

// Return animal named Teddy Bear to bear
Animals.prototype.replaceCatDog = function(){

  return this.animals.map(function(animal) {
    var pattern = /cat/i;
    var patternTwo = /dog/i;

    if(pattern.test(animal) === true){
      return animal.replace(pattern, "Kitty Cat");
    }else if(patternTwo.test(animal) === true){
      return animal.replace(patternTwo, "Puppy");
    }
    return animal;
  });
}

var Animals = new Animals(animalsList);

console.log(Animals.animalThreeLetters());
console.log(Animals.animalTwoWords());
console.log(Animals.animalwithoutK());
console.log(Animals.teddyToBear());
console.log(Animals.replaceCatDog());
