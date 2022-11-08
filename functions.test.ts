const {shuffleArray} = require('./utils')
const { bots } = require("./data");
import {expect, jest, test} from '@jest/globals';


describe('shuffleArray should return random', () => {
    test('bots', ()=> {
        expect(shuffleArray(bots)).toContain(bots[1])
    })

// describe('same robots', ()=> {
    test('return robots', ()=> {
        expect(shuffleArray(bots)).toBeTruthy()
    })
    const robo = bots.length
    test('length of robots', () => {
        expect(shuffleArray(robo)).toEqual(10)
    })

});
