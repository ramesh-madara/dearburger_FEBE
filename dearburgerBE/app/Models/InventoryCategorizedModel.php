<?php

namespace App\Models;

use CodeIgniter\Model;

class InventoryCategorizedModel extends Model
{
    protected $table      = 'tblinventory';
    protected $primaryKey = 'inventoryItemID';

    public function __construct()
    {
        parent::__construct();
    }

    public function getInventoryItemsWithCategory()
    {
        $builder = $this->db->table($this->table);
        $builder->select('tblinventory.*, tblinventoryitemcategories.inventoryItemCategoryName');
        $builder->join('tblinventoryitemcategories', 'tblinventory.inventoryItemCategoryId = tblinventoryitemcategories.inventoryItemCategoryId');
        return $builder->get()->getResultArray();
    }
}
