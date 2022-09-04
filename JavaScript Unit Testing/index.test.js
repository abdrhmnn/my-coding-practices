import {sum} from './index.js';
import {sumAll} from './coba.js';

test('adds 1 + 2 to equal 3', () => {
    // biasa digunakan untuk mengecek value yg bkn objek
    expect(sum(1, 2)).toBe(3);
});

test('object assignment', () => {
    const data = {one: 1};
    data.two = 2;
    expect(data).toEqual({one: 1, two: 2});
});

// test if value is null, undefined or falsy
test('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
});

test('numbers', () => {
    const value = 2 + 2
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);

    // toBe and toEqual are equivalent for numbers
    expect(value).toBe(4);
    expect(value).toEqual(4);
})

test('strings', () => {
    const value = "Abdurrahman"
    expect(value).toMatch(/hman/);
})


test('array', () => {
    const newArr = [
        1, 2, 3, 4, 5, 'abdu', 'eunha'
    ]
    expect(newArr).toContain('abdu');
    expect(newArr).toContainEqual(1)
});

test('array', () => {
    const newArr = [
        1, 2, 3, 4, 5, 'abdu', 'eunha'
    ]
    expect(newArr).toContain('abdu');
    expect(newArr).toContainEqual(1)
});

describe('scope array test', () => {
    // kita jg bisa melakukan nested describe

    beforeEach(() => {
        console.info('Sebelum di test array!')
    })
    afterEach(() => {
        console.info('Setelah di test array!')
    })
    test('array assignment', () => {
        const data = [10];
        data.push(2);
        expect(data).toEqual([10, 2]);
    });
})

// menjalankan kode program sebelum testing dilakukan
// beforeAll -> sekali dijalankan utk semua test
beforeEach(() => {
    console.info('Sebelum di test!')
})

// menjalankan kode program sesudah testing dilakukan
// afterAll -> sekali dijalankan utk semua test
afterEach(() => {
    console.info('Setelah di test!')
})