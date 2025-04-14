<!-- 14 April 2025 -->

<!-- Abbreviate a Two Word Name -->

<!-- Write a function to convert a name into initials. This kata strictly takes two words with one space in between them. -->

<!-- The output should be two capital letters with a dot separating them. -->

<!-- It should look like this: -->

<!-- Sam Harris => S.H -->

<!-- patrick feeney => P.F -->

<?php
function abbrevName($name) {
    return strtoupper(substr($name, 0, 1)) . '.' . strtoupper(substr($name, strpos($name, ' ') + 1, 1));
}

echo "Sam Harris => " . abbrevName('Sam Harris');
echo "\n";
echo "patrick feeney => " . abbrevName('patrick feeney');