<?php

namespace App\Controllers;

use App\Models\TableModel;

class TableController extends BaseController
{
    public function index()
    {
        $db = \Config\Database::connect();
        $model = new TableModel($db);

        $table = 'tblinventory';
        $fields = $model->getTableFields($table);

        helper('form');

        return view('table_view', ['table' => $table, 'fields' => $fields]);
    }

    public function insert()
    {
        $db = \Config\Database::connect();
        $model = new TableModel($db);

        $table = 'tblinventory';
        $data = $this->request->getPost();
        unset($data['submit']);
        $model->insertData($table, $data);

        return redirect()->to('/crud');
    }
}
