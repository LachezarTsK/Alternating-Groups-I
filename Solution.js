
/**
 * @param {number[]} colors
 * @return {number}
 */
var numberOfAlternatingGroups = function (colors) {
    let countGroupsOfAlternatingColors = 0;
    for (let i = 0; i < colors.length; ++i) {
        countGroupsOfAlternatingColors += isAlternatingColorsGroup(i, colors) ? 1 : 0;
    }
    return countGroupsOfAlternatingColors;
};

/**
 * @param {number} index
 * @param {number[]} colors
 * @return {boolean}
 */
function isAlternatingColorsGroup(index, colors) {
    let previousIndex = (colors.length - 1 + index) % colors.length;
    let nextIndex = (1 + index) % colors.length;
    return colors[previousIndex] !== colors[index] && colors[index] !== colors[nextIndex];
}
