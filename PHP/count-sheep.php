<!-- 18 April 2025 -->

<!-- If you can't sleep, just count sheeps!! -->

<!-- Task: -->
<!-- Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers. -->

<?php
function countSheeps($num) {
    $str = '';
    for ($i = 1; $i <= $num; $i++) {
        $str .= $i . ' sheep...';
    }
    return $str;
}

echo countSheeps(3);