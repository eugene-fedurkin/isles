const chalk = require('chalk');

function visualizeSolution(map, isleMap) {
    const colors = [chalk.bgBlue, chalk.bgRed, chalk.bgRedBright, chalk.bgGreen, chalk.bgMagenta];
    const isleColor = chalk.bgGreen;
    const waterColor = chalk.bgCyan;
    let colorMap = '';
    console.clear();

    for (let row = 0; row < map.length; row++) {
        for (let column = 0; column < map[row].length; column++) {
            if (typeof isleMap[row][column] !== 'number') {
                colorMap += map[row][column] === 1 ? isleColor('   ') : waterColor('   ');
            } else {
                const color = isleMap[row][column] % (colors.length - 1);
                const sizeCell = ` ${isleMap[row][column]}${isleMap[row][column] > 9 ? '' : ' '}`
                colorMap += !isleMap[row][column]
                    ? waterColor(sizeCell)
                    : colors[color](sizeCell) ;
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
