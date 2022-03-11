const Pet = require('../src/pet')

describe('constructor', () => {
    it('returns an object', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
    it('sets the name property', () => {
        const pet = new Pet('Fido');

        expect(pet.name).toEqual('Fido');
    });
    it('has an initial age of 0', () => {
        const pet = new Pet('Fido');

        expect(pet.age).toEqual(0);
    });
});

describe('growUp', () => {
    it('increments age by 1', () => {
        const pet = new Pet('Fido');

        expect(pet.age).toEqual(0);
        pet.growUp();
        expect(pet.age).toEqual(1); 
    });
    it('increase hunger by 5', () => {
        const pet = new Pet('Fido');

        expect(pet.hunger).toEqual(0);
        pet.growUp();
        expect(pet.hunger).toEqual(5); 
    });
    it('decrease fitness by 3', () => {
        const pet = new Pet('Fido');

        expect(pet.fitness).toEqual(10);
        pet.growUp();
        expect(pet.fitness).toEqual(7);
    });
    it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Fido');
        pet.age = 30;

        expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
    });
});

describe('walk', () => {
    it('increase fitness by 4', () => {
        const pet = new Pet('Fido');
        pet.fitness = 4;
        pet.walk();

        expect(pet.fitness).toEqual(8);
    });
    it('fitness level should never go above 10', () => {
        const pet = new Pet('Fido');
        pet.fitness = 8;
        pet.walk();

        expect(pet.fitness).toEqual(10);
    });
    it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Fido');
        pet.fitness = 0;

        expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
    });
});

describe('feed', () => {
    it('decreases hunger by 3', () => {
        const pet = new Pet('Fido');
        pet.hunger = 3;
        pet.feed();

        expect(pet.hunger).toBe(0);
    })
    it('hunger should never go below 0', () => {
        const pet = new Pet('Fido');
        pet.hunger = 2;
        pet.feed();

        expect(pet.hunger).toBe(0)
    });
    it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Fido');
        pet.hunger = 10;

        expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
    });
});

describe('checkUp', () => {
    it('returns \"I need a walk\" when fitness is at 3 or less', () => {
        const pet = new Pet('Fido');
        pet.fitness = 3;

        expect(pet.checkUp()).toBe('I need a walk');
    });
    it('returns \"I am hungry\" when hunger is at 5 or less', () => {
        const pet = new Pet('Fido');
        pet.hunger = 6;

        expect(pet.checkUp()).toBe('I am hungry');
    });
    it('returns \"I am hungry AND I need a walk\" if both above are true', () => {
        const pet = new Pet('Fido');
        pet.fitness = 3
        pet.hunger = 5;

        expect(pet.checkUp()).toBe('I am hungry AND I need a walk');
    });
    it('returns \"I feel great!\" if neither are true', () => {
        const pet = new Pet('Fido');
        pet.fitness = 4
        pet.hunger = 4

        expect(pet.checkUp()).toBe('I feel great!')
    });
});

describe('isAlive', () => {
    it('returns false if fitness is 0 or less', () => {
        const pet = new Pet('Fido');
        pet.fitness = 0;

        expect(pet.isAlive).toBeFalsy();
    });
    it('returns false if hunger is 10 or more', () => {
        const pet = new Pet('Fido');
        pet.hunger = 11;

        expect(pet.isAlive).toBeFalsy();
    });
    it('returns false if age is 30 or more', () => {
        const pet = new Pet('Fido');
        pet.age = 31;

        expect(pet.isAlive).toBeFalsy();
    });
    it('returns true if fitness is above 0, hunger is below 10 and age is below 30 ', () => {
        const pet = new Pet('Fido');
        pet.growUp();

        expect(pet.isAlive).toBeTruthy();
    });
});
