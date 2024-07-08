
#include <span>
#include <vector>
using namespace std;

class Solution {

public:
    int numberOfAlternatingGroups(const vector<int>& colors) const {
        int countGroupsOfAlternatingColors = 0;
        for (int i = 0; i < colors.size(); ++i) {
            countGroupsOfAlternatingColors += isAlternatingColorsGroup(i, colors) ? 1 : 0;
        }
        return countGroupsOfAlternatingColors;
    }

private:
    bool isAlternatingColorsGroup(int index, span<const int> colors) const {
        int previousIndex = (colors.size() - 1 + index) % colors.size();
        int nextIndex = (1 + index) % colors.size();
        return colors[previousIndex] != colors[index] && colors[index] != colors[nextIndex];
    }
};
