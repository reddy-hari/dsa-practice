'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'paths' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY grid as parameter.
 */

function paths(grid) {

    const dfs = (row, col, prevValue, visited) => {
        if (row < 0 || col < 0 || row >= grid.length || col >= grid[0].length || grid[row][col] <= prevValue || visited[row][col]) return 0
    }

    const visited = Array.from({ length: grid.length }, () => Array(grid[0].length).fill(false))
    let totalCount = 0

    for (let i=  i<grid.length; i ++) {
    for (let j = 0; j < grid[0].length; j++) {
        totalCount += dfs(i, j, -1, visited)
    }
}

return totalCount
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const gridRows = parseInt(readLine().trim(), 10);

    const gridColumns = parseInt(readLine().trim(), 10);

    let grid = Array(gridRows);

    for (let i = 0; i < gridRows; i++) {
        grid[i] = readLine().replace(/\s+$/g, '').split(' ').map(gridTemp => parseInt(gridTemp, 10));
    }

    const result = paths(grid);

    ws.write(result + '\n');

    ws.end();
}
