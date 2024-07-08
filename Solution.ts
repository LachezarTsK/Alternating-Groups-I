
function numberOfAlternatingGroups(colors: number[]): number {
    let countGroupsOfAlternatingColors = 0;
    for (let i = 0; i < colors.length; ++i) {
        countGroupsOfAlternatingColors += isAlternatingColorsGroup(i, colors) ? 1 : 0;
    }
    return countGroupsOfAlternatingColors;
};

function isAlternatingColorsGroup(index: number, colors: number[]): boolean {
    let previousIndex = (colors.length - 1 + index) % colors.length;
    let nextIndex = (1 + index) % colors.length;
    return colors[previousIndex] !== colors[index] && colors[index] !== colors[nextIndex];
}
