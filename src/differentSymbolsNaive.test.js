const solution = require('./differentSymbolsNaive.js');

test('test 1', () => {
    expect(solution("cabca")).toBe(3);
});

test('test 2', () => {
    expect(solution("aba")).toBe(2);
});

test('test 3', () => {
    expect(solution("ccccccccccc")).toBe(1);
});

test('test 4', () => {
    expect(solution("bcaba")).toBe(3);
});

test('test 5', () => {
    expect(solution("codesignal")).toBe(10);
});
