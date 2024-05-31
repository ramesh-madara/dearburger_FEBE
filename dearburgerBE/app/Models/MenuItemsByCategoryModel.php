<?php

namespace App\Models;

use CodeIgniter\Model;

class MenuItemsByCategoryModel extends Model
{
    protected $table = 'tblmenuitems';
    protected $primaryKey = 'id';
    protected $allowedFields = ['name', 'description'];

    public function __construct()
    {
        parent::__construct();
    }

    public function getItemsByCategory($categoryName)
    {
        $builder = $this->db->table($this->table);
        $builder->select('*');
        $builder->join('tblcategory', 'tblmenuitems.categoryID = tblcategory.categoryID');
        $builder->where('tblcategory.categoryName', $categoryName);
        $builder->where('tblcategory.categoryStatus', true);
        return $builder->get()->getResultArray();
    }
}
