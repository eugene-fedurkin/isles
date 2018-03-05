const map = require('./map');
const visualizeSolution = require('./visualizeSolution');

function solution(map, visualizeSolution) {
    let counter = 0;
    const isleMap = new Array(map.length);

    for (let row = 0; row < map.length; row++) {
        isleMap[row] = new Array(map[0].length);
    }

    for (let row = 0; row < map.length; row++) {
        for (let column = 0; column < map[0].length; column++) {

            const leftNeighbour = isleMap[row][column - 1];
            const topNeighbour = isleMap[row - 1] ? isleMap[row - 1][column] : 0;

            if (map[row][column]) {
                if (!leftNeighbour && !topNeighbour) {
                    isleMap[row][column] = ++counter;
                } else if (!leftNeighbour || !topNeighbour) {
                    isleMap[row][column] = leftNeighbour ? leftNeighbour : topNeighbour;
                } else if (leftNeighbour === topNeighbour) {
                    isleMap[row][column] = leftNeighbour;
                } else {
                    isleMap[row][column] = leftNeighbour;
                    merge(leftNeighbour, topNeighbour, isleMap);
                    counter--;
                }
            } else {
                isleMap[row][column] = 0;
            }
            if (visualizeSolution) visualizeSolution(map, isleMap);
        }
    }
    console.log('\x1b[36m%s\x1b[0m', `The map has ${counter} island(s)`);
    return counter;
}

function merge(firstId, secondId, map) {
    const lowerId = firstId < secondId ? firstId : secondId;
    const higherId = firstId > secondId ? firstId : secondId;

    for (let row = 0; row < map.length; row++) {
        map[row] = map[row].map(id => id === higherId ? lowerId : id);
    }
}

solution(map, visualizeSolution);
