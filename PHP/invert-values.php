<!-- 14 April 2025 -->

<!-- Invert Values -->

<!-- Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives. -->

<!-- [1, 2, 3, 4, 5] > [-1, -2, -3, -4, -5] -->
<!-- [1, -2, 3, -4, 5] > [-1, 2, -3, 4, -5] -->
<!-- [] > [] -->
<!-- You can assume that all values are integers. Do not mutate the input array. -->

<?php

function invert($array)
{
    return array_map(function ($value) {
        return -$value;
    }, $array);
}

$input = [1, 2, 3, 4, 5];
$output = invert($input);
var_dump($output);
