// INITIAL PROPERTY VALUES
const initialAge = 0;
const initialHunger = 0;
const initialFitness = 10;
// DEATH THRESHOLDS
const MAXIMUM_FITNESS = 10;
const MINIMUM_FITNESS = 0;
const MAXIMUM_HUNGER = 10;
const MINIMUM_HUNGER = 0; 
const MAXIMUM_AGE = 30;

function Pet(name) {
    this.name = name;
    this.age = initialAge;
    this.hunger = initialHunger;
    this.fitness = initialFitness;
    this.children = [];
};

Pet.prototype = {
    // added a getter to the prototype to dynamically track the state of the pet
    get isAlive() {
      return (
          this.age < MAXIMUM_AGE 
          && 
          this.hunger < MAXIMUM_HUNGER 
          && 
          this.fitness > MINIMUM_FITNESS);git
    }
};

Pet.prototype.growUp = function () {
    // age increases by 1, hunger increases by 5 and fitness dcreases by 3 when called
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
    }
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
};

Pet.prototype.walk = function () {
    // fitness level increases by 4 when called
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
    }
    if ((this.fitness + 4) <= MAXIMUM_FITNESS) {
        this.fitness += 4;
    } else {
        this.fitness = MAXIMUM_FITNESS;
    }
};

Pet.prototype.feed = function () {
    // hunger level decreases by 3 when called
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
    }
    if ((this.hunger - 3) < MINIMUM_HUNGER) {
        this.hunger = MINIMUM_HUNGER;
    } else {
        this.hunger -= 3;
    }
};

Pet.prototype.checkUp = function () {
    // returns string dependant on the current fitness and hunger levels of the pet when called
    const hungry = this.hunger >= 5;
    const unfit = this.fitness <= 3;

    if (unfit && hungry) {
        return `I am hungry AND I need a walk`
    } else if (unfit) {
        return `I need a walk`
    } else if (hungry) {
        return `I am hungry`
    } else {
        return `I feel great!`
    }
};

Pet.prototype.adoptChild = function (adoptedChild) {
    // injects new child object into Pet instance
     this.children.push(adoptedChild);
}

module.exports = Pet;