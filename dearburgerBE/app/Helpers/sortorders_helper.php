<?php



function sort_orders($orderItems)
{
    $sortedOrderItems = [];
    foreach ($orderItems as $item) {
        $orderID = $item['orderID'];
        if (!isset($sortedOrderItems[$orderID])) {
            $sortedOrderItems[$orderID] = [
                'orderID' => $orderID,
                'orderStatus' => $item['orderStatus'],
                'orderDatetime' => $item['orderDatetime'],
                'orderItems' => []
            ];
        }
        $sortedOrderItems[$orderID]['orderItems'][] = [
            'menuItemID' => $item['menuItemID'],
            'orderTypeID' => $item['orderTypeID'],
            'orderQty' => $item['orderQty'],
            'itemPriceID' => $item['itemPriceID'],
            'paymentTypeID' => $item['paymentTypeID'],
            'optionID' => $item['optionID'],
        ];
    }

    return array_values($sortedOrderItems);
}
