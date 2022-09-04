import {sumAll} from './coba.js';

const data = [
    {numbers: [10, 20, 30], expected: 60},
    {numbers: [10, 20, 30, 20, 30], expected: 110},
]

test.todo("haii gesss")

test.each(data)("hasil pertambahan dari %s.numbers menghasilkan %s.expected", ({numbers, expected}) => {
    expect(sumAll(numbers)).toBe(expected);
});

test.only('object assignment', () => {
    const data = {one: 1};
    data.two = 2;
    expect(data).toEqual({one: 1, two: 2});
});