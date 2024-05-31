<?php

namespace App\Models;

use CodeIgniter\Model;

class ExpensesModel extends Model
{
    protected $table      = 'tblexpenses';
    protected $primaryKey = 'expenseID';

    protected $allowedFields = ['inventoryItemID', 'qty', 'price', 'description', 'date'];
}
