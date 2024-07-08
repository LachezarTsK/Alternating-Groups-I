
public class Solution {

    public int numberOfAlternatingGroups(int[] colors) {
        int countGroupsOfAlternatingColors = 0;
        for (int i = 0; i < colors.length; ++i) {
            countGroupsOfAlternatingColors += isAlternatingColorsGroup(i, colors) ? 1 : 0;
        }
        return countGroupsOfAlternatingColors;
    }

    private boolean isAlternatingColorsGroup(int index, int[] colors) {
        int previousIndex = (colors.length - 1 + index) % colors.length;
        int nextIndex = (1 + index) % colors.length;
        return colors[previousIndex] != colors[index] && colors[index] != colors[nextIndex];
    }
}