<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use CodeIgniter\HTTP\ResponseInterface;
use App\Libraries\GroceryCrud;
use Config\Database;


class OrdersViewController extends BaseController
{
    public function index()
    {
        $db = Database::connect();
        $fields = $db->getFieldNames('tblorder');

        $crud = new GroceryCrud();

        $crud->setTable('tblorder');
        $crud->setTheme('datatables');
        $crud->columns($fields);

        $output = $crud->render();
        return $this->_output($output);
    }
    private function _output($output = null)
    {
        return view('example', (array)$output);
    }
}
