<!-- 15 April -->

<!-- Fake Binary -->

<!-- Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string. -->

<!-- Note: input will never be an empty string -->

<?php

function fake_bin($str)
{
    $result = '';
    for ($i = 0; $i < strlen($str); $i++) {
        $result .= ($str[$i] < 5) ? '0' : '1';
    }
    return $result;
}

$input = "45385593107843568";
$output = fake_bin($input);
var_dump($output);
