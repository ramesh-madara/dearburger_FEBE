<?php

namespace App\Models;

use CodeIgniter\Model;

class InventoryManageModel extends Model
{
    // protected $returnType = 'array';
    protected $allowedFields = [];

    public function __construct($tableName = null, $primaryKey = null, $allowedFields = [])
    {
        parent::__construct();

        if ($tableName) {
            $this->setTable($tableName);
        }
        if ($tableName && $primaryKey) {
            $this->setTable($tableName, $primaryKey);
        }

        if (!empty($allowedFields)) {
            $this->allowedFields = $allowedFields;
        }
    }

    public function setTable($tableName, $primaryKey = null)
    {
        $this->table = $tableName;
        $this->primaryKey = $primaryKey;
    }

    public function getAllValues()
    {
        return $this->findAll();
    }

    public function getRecords($columName, $id)
    {
        return $this->where($columName, $id)->findAll();
    }

    public function updateRecords($updateColumn, $idColumn, $id, $value)
    {
        try {
            $record = $this->where($idColumn, $id)->first();

            if (!$record) {
                return false;
            }
            $newValue = floatval($record[$updateColumn]) - floatval($value);

            $this->set($updateColumn, $newValue);
            $this->where($idColumn, $id);
            $this->update();

            $this->updateRepurchaseStatus($id);

            return true;
        } catch (\Throwable $th) {
            return $th->getMessage();
        }
    }

    public function updateRepurchaseStatus($id)
    {
        $idColumn = 'inventoryItemID';
        $record = $this->where($idColumn, $id)->first();
        $repurQty = floatval($record['repurchaseQty']);
        $qty = floatval($record['qty']);

        if ($repurQty >= $qty) {
            try {
                $this->set("repurchaseStatus", "REPURCHASE")
                    ->where($idColumn, $id)
                    ->update();
                return true;
            } catch (\Throwable $th) {
                return $th->getMessage();
            }
        } else {
            try {
                $this->set("repurchaseStatus", NULL)
                    ->where($idColumn, $id)
                    ->update();
                return true;
            } catch (\Throwable $th) {
                return $th->getMessage();
            }
        }
    }
}
