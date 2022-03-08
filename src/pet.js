const MAXIMUM_FITNESS = 10;
const MINIMUM_HUNGER = 0; 

function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
}
Pet.prototype.growUp = function () {
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
}
Pet.prototype.walk = function () {
    if ((this.fitness + 4) <= MAXIMUM_FITNESS) {
        this.fitness += 4;
    } else {
        this.fitness = MAXIMUM_FITNESS;
    }
}
Pet.prototype.feed = function () {
    if ((this.hunger - 3) < MINIMUM_HUNGER) {
        this.hunger = MINIMUM_HUNGER;
    } else {
        this.hunger -= 3;
    }
}
Pet.prototype.checkUp = function () {
    if (this.fitness <= 3 && this.hunger >= 5) {
        return `I am hungry AND I need a walk`
    } else if (this.fitness <= 3) {
        return `I need a walk`
    } else if (this.hunger >= 5) {
        return `I am hungry`
    }
}


module.exports = Pet;