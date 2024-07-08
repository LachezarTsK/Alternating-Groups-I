
using System;

public class Solution
{
    public int NumberOfAlternatingGroups(int[] colors)
    {
        int countGroupsOfAlternatingColors = 0;
        for (int i = 0; i < colors.Length; ++i)
        {
            countGroupsOfAlternatingColors += IsAlternatingColorsGroup(i, colors) ? 1 : 0;
        }
        return countGroupsOfAlternatingColors;
    }

    private bool IsAlternatingColorsGroup(int index, int[] colors)
    {
        int previousIndex = (colors.Length - 1 + index) % colors.Length;
        int nextIndex = (1 + index) % colors.Length;
        return colors[previousIndex] != colors[index] && colors[index] != colors[nextIndex];
    }
}
