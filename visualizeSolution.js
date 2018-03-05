const chalk = require('chalk');

function visualizeSolution(map, isleMap) {
    const colors = [chalk.bgCyan, chalk.bgBlue, chalk.bgRed, chalk.bgRedBright, chalk.bgGreen, chalk.bgMagenta, chalk.bgMagentaBright];
    let colorMap = '';

    console.clear();

    for (let row = 0; row < map.length; row++) {
        for (let column = 0; column < map[row].length; column++) {
            if (typeof isleMap[row][column] !== 'number') {
                const isleColor = colors[4];
                const waterColor = colors[0];
                colorMap += map[row][column] === 1 ? isleColor('   ') : waterColor('   ');
            } else {
                const color = isleMap[row][column] % (colors.length - 1);
                colorMap += colors[color](` ${isleMap[row][column]} `);
            }
        }
        colorMap += '\n';
    }

    console.log(colorMap);
    waitMilliseconds(100);
}

function waitMilliseconds(msec) {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, msec);
}

module.exports = visualizeSolution;
