
class Solution {
    fun numberOfAlternatingGroups(colors: IntArray): Int {
        var countGroupsOfAlternatingColors = 0
        for (i in colors.indices) {
            countGroupsOfAlternatingColors += if (isAlternatingColorsGroup(i, colors)) 1 else 0
        }
        return countGroupsOfAlternatingColors
    }

    private fun isAlternatingColorsGroup(index: Int, colors: IntArray): Boolean {
        var previousIndex = (colors.size - 1 + index) % colors.size
        var nextIndex = (1 + index) % colors.size
        return colors[previousIndex] != colors[index] && colors[index] != colors[nextIndex]
    }
}
