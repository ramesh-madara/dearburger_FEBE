<?php

namespace App\Models;

use CodeIgniter\Model;
use Exception;


class InventoryModel extends Model
{

    protected $table      = 'tblinventory';
    protected $primaryKey = 'inventoryItemID';

    protected $allowedFields = ['itemName', 'inventoryItemCategoryId', 'qty', 'sku'];

    /**
     * @param int $inventoryItemID
     * @param int $qty
     * @return bool
     */
    public function addQuantity(int $inventoryItemID, int $qty): array
    {
        try {
            $currentItem = $this->find($inventoryItemID);

            if (!$currentItem) {
                return [
                    'status' => false,
                    'message' => 'Item not found'
                ];
            }

            $newQty = $currentItem['qty'] + $qty;

            if ($this->update($inventoryItemID, ['qty' => $newQty])) {
                return [
                    'status' => true,
                    'message' => 'Quantity updated successfully'
                ];
            } else {
                return [
                    'status' => false,
                    'message' => 'Failed to update quantity'
                ];
            }
        } catch (Exception $e) {
            return [
                'status' => false,
                'message' => 'An error occurred: ' . $e->getMessage()
            ];
        }
    }
}
