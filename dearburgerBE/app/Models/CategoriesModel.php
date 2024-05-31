<?php

namespace App\Models;

use CodeIgniter\Model;

class CategoriesModel extends Model
{
    protected $table = 'tblcategory';
    protected $primaryKey = 'id';
    protected $allowedFields = ['name', 'description'];

    public function __construct()
    {
        parent::__construct();
    }
}
