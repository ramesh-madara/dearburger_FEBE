// File: app/Helpers/my_helper.php
<?php
if (!function_exists('sort_orders')) {
    function sort_orders($orders)
    {


        return $orders;
    }
} else {
    return 'sort_orders Function name already exists.';
}
