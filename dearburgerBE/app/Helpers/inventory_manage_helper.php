<?php

use App\Models\InventoryManageModel;

function removeFromInventory($menuId, $quantity)
{
    //table instances
    $tblInvAllowedFields = ['itemName', 'qty', 'repurchaseStatus'];
    $tblIngAllowedFields = ['qty'];
    $inventoryTable = new InventoryManageModel('tblinventory', 'inventoryItemID', $tblInvAllowedFields);
    $ingredientTable = new InventoryManageModel('tblingredients', 'ingredientsID', $tblIngAllowedFields);

    $records = $ingredientTable->getRecords('menuItemID', $menuId);

    $returnArr = [];

    foreach ($records as $value) {
        $invID = $value['inventoryItemID'];
        $qty = $value['qty'];

        $totalQty = floatval($qty)  * floatval($quantity);

        $result = $inventoryTable->updateRecords('qty', 'inventoryItemID', $invID, $totalQty);

        if ($result) {
            $returnArr[] = $totalQty . ' removed from inventory successfully';
        } else {
            $returnArr[] = $result;
        }
    }

    return $returnArr;
}
