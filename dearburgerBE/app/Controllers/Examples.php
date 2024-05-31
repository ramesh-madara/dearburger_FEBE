<?php

namespace App\Controllers;

use App\Libraries\GroceryCrud;
use Config\Database;

class Examples extends BaseController
{
    public function customers_management()
    {
        $crud = new GroceryCrud();

        $crud->setTable('customers');

        $output = $crud->render();

        return $this->_exampleOutput($output);
    }

    public function orders_management()
    {
        $crud = new GroceryCrud();

        $crud->setRelation('customerNumber', 'customers', '{contactLastName} {contactFirstName}');
        $crud->displayAs('customerNumber', 'Customer');
        $crud->setTable('orders');
        $crud->setSubject('Order');
        $crud->unsetAdd();
        $crud->unsetDelete();

        $output = $crud->render();

        return $this->_exampleOutput($output);
    }

    public function offices_management()
    {
        $crud = new GroceryCrud();

        $crud->setTheme('datatables');
        $crud->setTable('tblcategory');
        $crud->setSubject('Categories');
        $crud->requiredFields(['categoryName']);
        // $crud->columns(['city', 'country', 'phone', 'addressLine1', 'postalCode']);
        $crud->setRead();

        $output = $crud->render();

        return $this->_exampleOutput($output);
    }
    public function menu_items_view()
    {
        $db = Database::connect();
        $fields = $db->getFieldNames('tblmenuitems');
        $crud = new GroceryCrud();

        $crud->setTheme('datatables');
        $crud->setTable('tblmenuitems');
        $crud->setSubject('MenuItems');
        $crud->columns($fields);
        $crud->setRelation('categoryID', 'tblcategory', 'categoryName');
        $crud->setRelation('itemPriceID', 'tblitemprice', 'itemPrice');
        $crud->setRead();

        $output = $crud->render();

        return $this->_exampleOutput($output);
    }
    public function addons_view()
    {
        $db = Database::connect();
        $fields = $db->getFieldNames('tbladdons');
        $crud = new GroceryCrud();

        $crud->setTheme('datatables');
        $crud->setTable('tbladdons');
        $crud->setSubject('MenuItemAddons');
        $crud->columns($fields);
        $crud->setRelation('menuItemID_menu', 'tblmenuitems', 'menuItemName', array('CategoryID !=' => 5));

        $crud->setRelation('menuItemID_addon', 'tblmenuitems', 'menuItemName', array('CategoryID' => 5));

        $crud->setRead();

        $output = $crud->render();

        return $this->_exampleOutput($output);
    }
    public function menu_item_options_view()
    {
        $crud = new GroceryCrud();

        $crud->setTheme('datatables');
        $crud->setTable('tblmenuitemoptions');
        $crud->setSubject('MenuItems');
        // $crud->requiredFields(['menuItemName']);
        // $crud->columns(['city', 'country', 'phone', 'addressLine1', 'postalCode']);
        $crud->setRead();

        $output = $crud->render();

        return $this->_exampleOutput($output);
    }
    public function products_management()
    {
        $crud = new GroceryCrud();

        $crud->setTable('products');
        $crud->setSubject('Product');
        $crud->unsetColumns(['productDescription']);
        $crud->callbackColumn('buyPrice', function ($value) {
            return $value . ' &euro;';
        });

        $output = $crud->render();

        return $this->_exampleOutput($output);
    }

    public function employees_management()
    {
        $crud = new GroceryCrud();

        $crud->setTheme('datatables');
        $crud->setTable('employees');
        $crud->setRelation('officeCode', 'offices', 'city');
        $crud->displayAs('officeCode', 'Office City');
        $crud->setSubject('Employee');

        $crud->requiredFields(['lastName']);

        $output = $crud->render();

        return $this->_exampleOutput($output);
    }

    public function film_management()
    {
        $crud = new GroceryCrud();

        $crud->setTable('film');
        $crud->setRelationNtoN('actors', 'film_actor', 'actor', 'film_id', 'actor_id', 'fullname');
        $crud->setRelationNtoN('category', 'film_category', 'category', 'film_id', 'category_id', 'name');
        $crud->unsetColumns(['special_features', 'description', 'actors']);

        $crud->fields(['title', 'description', 'actors',  'category', 'release_year', 'rental_duration', 'rental_rate', 'length', 'replacement_cost', 'rating', 'special_features']);

        $output = $crud->render();

        return $this->_exampleOutput($output);
    }


    private function _exampleOutput($output = null)
    {
        return view('example', (array)$output);
    }
}
