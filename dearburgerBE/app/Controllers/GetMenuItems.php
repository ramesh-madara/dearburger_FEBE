<?php

namespace App\Controllers;

use App\Models\MenuItemsModel;
use App\Models\MenuItemsByCategoryModel;
use CodeIgniter\Controller;
use CodeIgniter\API\ResponseTrait;

class GetMenuItems extends Controller
{
    use ResponseTrait;

    public function index()
    {
        $model = new MenuItemsModel();
        $menuItems = $model->findAll();
        return $this->respond($menuItems);
    }

    public function get_menu_items_with_addons()
    {
        $model = new MenuItemsModel();
        $menuItems = $model->getMenuItemsWithAddons();
        return $this->respond($menuItems);
    }
    public function get_menu_items_with_addons_by_category($categoryName)
    {
        $model = new MenuItemsModel();
        $menuItems = $model->getMenuItemsWithAddonsByCategory($categoryName);
        return $this->respond($menuItems);
    }

    public function get_menu_items_by_category($categoryName)
    {
        $model = new MenuItemsByCategoryModel();
        $menuItems = $model->getItemsByCategory($categoryName);
        return $this->respond($menuItems);
    }
}
