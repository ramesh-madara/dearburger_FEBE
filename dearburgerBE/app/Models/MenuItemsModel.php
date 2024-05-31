<?php

namespace App\Models;

use CodeIgniter\Model;

class MenuItemsModel extends Model
{
    protected $table = 'tblmenuitems';
    protected $primaryKey = 'id';
    protected $allowedFields = ['name', 'description'];

    public function __construct()
    {
        parent::__construct();
    }

    public function getMenuItemsWithAddons()
    {
        $builder = $this->db->table($this->table);
        $builder->select('tblmenuitems.*, tbladdons.menuItemID_addon as addonID');
        $builder->join('tbladdons', 'tbladdons.menuItemID_menu = tblmenuitems.menuItemID', 'left');
        $query = $builder->get();

        $result = $query->getResult();

        $formattedResult = [];
        foreach ($result as $row) {
            if (!isset($formattedResult[$row->menuItemID])) {
                $formattedResult[$row->menuItemID] = [
                    'categoryID' => $row->categoryID,
                    'menuItemID' => $row->menuItemID,
                    'menuItemType' => $row->menuItemType,
                    'menuItemName' => $row->menuItemName,
                    'menuItemDescription' => $row->menuItemDescription,
                    'featured' => $row->featured,
                    'itemPriceID' => $row->itemPriceID,
                    'addons' => []
                ];
            }
            if ($row->addonID) {
                // Get the menuItemName for the addon
                $addonMenuId = $row->addonID;
                $addonMenuName = $this->db->table('tblmenuitems')
                    ->select('menuItemName')
                    ->where('menuItemID', $addonMenuId)
                    ->get()
                    ->getRow()
                    ->menuItemName;

                $formattedResult[$row->menuItemID]['addons'][] = [
                    'addonID' => $row->addonID,
                    'addonName' => $addonMenuName
                ];
            }
        }

        return array_values($formattedResult);
    }

    public function getMenuItemsWithAddonsByCategory($category)
    {
        $builder = $this->db->table($this->table);
        $builder->select('tblmenuitems.*, tbladdons.menuItemID_addon as addonID');
        $builder->join('tbladdons', 'tbladdons.menuItemID_menu = tblmenuitems.menuItemID', 'left');
        $builder->join('tblcategory', 'tblcategory.categoryID = tblmenuitems.categoryID', 'left');
        $builder->where('tblcategory.categoryID', $category);
        $query = $builder->get();

        $result = $query->getResult();

        $formattedResult = [];
        foreach ($result as $row) {
            if (!isset($formattedResult[$row->menuItemID])) {
                $formattedResult[$row->menuItemID] = [
                    'categoryID' => $row->categoryID,
                    'menuItemID' => $row->menuItemID,
                    'menuItemType' => $row->menuItemType,
                    'menuItemName' => $row->menuItemName,
                    'menuItemDescription' => $row->menuItemDescription,
                    'featured' => $row->featured,
                    'itemPriceID' => $row->itemPriceID,
                    'addons' => []
                ];
            }
            if ($row->addonID) {
                // Get the menuItemName for the addon
                $addonMenuId = $row->addonID;
                $addonMenuName = $this->db->table('tblmenuitems')
                    ->select('menuItemName')
                    ->where('menuItemID', $addonMenuId)
                    ->get()
                    ->getRow()
                    ->menuItemName;

                $formattedResult[$row->menuItemID]['addons'][] = [
                    'addonID' => $row->addonID,
                    'addonName' => $addonMenuName
                ];
            }
        }

        return array_values($formattedResult);
    }
}
