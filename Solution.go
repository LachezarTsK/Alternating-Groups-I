
package main

import "fmt"

func numberOfAlternatingGroups(colors []int) int {
    countGroupsOfAlternatingColors := 0
    for i := range colors {
        countGroupsOfAlternatingColors += Ternary(isAlternatingColorsGroup(i, colors), 1, 0)
    }
    return countGroupsOfAlternatingColors
}

func isAlternatingColorsGroup(index int, colors []int) bool {
    previousIndex := (len(colors) - 1 + index) % len(colors)
    nextIndex := (1 + index) % len(colors)
    return colors[previousIndex] != colors[index] && colors[index] != colors[nextIndex]
}

func Ternary[T any](condition bool, first T, second T) T {
    if condition {
        return first
    }
    return second
}
