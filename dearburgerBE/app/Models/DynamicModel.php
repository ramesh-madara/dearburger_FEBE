<?php

namespace App\Models;

use CodeIgniter\Model;

class DynamicModel extends Model
{
    protected $returnType = 'array';

    public function __construct($tableName = null, $primaryKey = null)
    {
        parent::__construct();

        if ($tableName) {
            $this->setTable($tableName, $primaryKey);
        }
    }

    public function setTable($tableName, $primaryKey = null)
    {
        $this->table = $tableName;
        if ($primaryKey) {
            $this->primaryKey = $primaryKey;
        }
    }

    public function getAllValues()
    {
        return $this->findAll();
    }
    public function getColumn($columnName)
    {
        return $this->select($columnName)->findAll();
    }

    public function getValuesByKey($key, $value)
    {
        return $this->like($key, $value)->findAll();
    }
}
