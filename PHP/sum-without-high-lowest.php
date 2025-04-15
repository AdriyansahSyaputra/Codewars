<!-- 15 April 2025 -->

<!-- Sum without highest and lowest number -->

<!-- Task -->
<!-- Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ). -->

<!-- The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value. -->

<!-- Mind the input validation. -->

<!-- Example -->
<!-- { 6, 2, 1, 8, 10 } => 16 -->
<!-- { 1, 1, 11, 2, 3 } => 6 -->
<!-- Input validation -->
<!-- If an empty value ( null, None, Nothing, nil etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0. -->

<?php

function sumArray($array)
{
    if ($array == null || count($array) == 0 || count($array) == 1) {
        return 0;
    }
    sort($array);
    return array_sum(array_slice($array, 1, count($array) - 2));
}

var_dump(sumArray([6, 2, 1, 8, 10]));  // Output: int(16)
var_dump(sumArray([1, 1, 11, 2, 3]));  // Output: int(6)
var_dump(sumArray([]));                // Output: int(0)
var_dump(sumArray([5]));               // Output: int(0)