function solution(s) {
    let unique = new Set(s);
    return unique.size;
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test differentSymbolsNaive

// alternative solution