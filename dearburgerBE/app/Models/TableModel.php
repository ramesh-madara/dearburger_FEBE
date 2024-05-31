<?php

namespace App\Models;

use CodeIgniter\Database\ConnectionInterface;

class TableModel
{
    protected $db;

    public function __construct(ConnectionInterface &$db)
    {
        $this->db = &$db;
    }

    public function getTableFields($table)
    {
        $db = \Config\Database::connect();
        $fields = $db->getFieldData($table);

        $primaryKey = null;
        foreach ($fields as $field) {
            if ($field->primary_key) {
                $primaryKey = $field->name;
                break;
            }
        }

        $fields = array_filter($fields, function ($field) use ($primaryKey) {
            return $field->name !== $primaryKey;
        });

        return array_values($fields);
    }


    public function insertData($table, $data)
    {
        $this->db->table($table)->insert($data);
    }
}
