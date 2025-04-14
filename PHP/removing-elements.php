<!-- 14 April 2025 -->

<!-- Removing Elements -->

<!-- Take an array and remove every second element from the array. Always keep the first element and start removing with the next element. -->

<!-- Example: -->
<!-- /* ["Keep", "Remove", "Keep", "Remove", "Keep", ...] > ["Keep", "Keep", "Keep", ...]  -->

<!-- None of the arrays will be empty, so you don't have to worry about that! -->

<?php
function removeEveryOther($array)
{
    return array_filter($array, function ($value, $index) {
        return $index % 2 == 0;
    }, ARRAY_FILTER_USE_BOTH);
}


$input = ["Keep", "Remove", "Keep", "Remove", "Keep"];
$output = removeEveryOther($input);
var_dump($output);
