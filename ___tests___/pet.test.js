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
    })
})
