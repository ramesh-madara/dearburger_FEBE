<?php

namespace App\Controllers;

use App\Libraries\GroceryCrud;

use App\Controllers\BaseController;
use CodeIgniter\HTTP\ResponseInterface;

class ExpensesController extends BaseController
{
    public function index()
    {
        $crud = new GroceryCrud();
        $crud->setTable('tblinventory');
        $crud->setTheme('datatables');

        $crud->setRelation('inventoryItemCategoryId', 'tblinventoryitemcategories', 'inventoryItemCategoryName');

        $other_css_files = [
            'https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback',
            'plugins/fontawesome-free/css/all.min.css',
            'dist/css/adminlte.min.css'
        ];



        $output = $crud->render();

        $table_name = 'tblinventory';
        $output->table_name = $table_name;

        $output->other_css_files = $other_css_files;

        return $this->Output($output);
    }
    public function categories()
    {
        $crud = new GroceryCrud();
        $crud->setTable('tblinventoryitemcategories');

        $output = $crud->render();
        $table_name = 'tblinventoryitemcategories';
        $output->table_name = $table_name;

        return $this->Output($output);
    }
    public function expences()
    {
        $crud = new GroceryCrud();
        $crud->setTheme('datatables');
        $crud->setTable('tblexpenses');
        $crud->setSubject('Expences');

        $crud->setRelation('inventoryItemID', 'tblinventory', 'itemName');
        $fields = ['entryID', 'inventoryItemID', 'qty', 'description', 'price', 'date'];
        $crud->columns($fields);
        $output = $crud->render();
        $table_name = 'tblexpenses';
        $output->table_name = $table_name;
        return $this->Output($output);
    }
    private function Output($output = null)
    {
        return view('example', (array)$output);
    }
}
