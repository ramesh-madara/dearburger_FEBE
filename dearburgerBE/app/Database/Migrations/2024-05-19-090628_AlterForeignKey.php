<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class AlterForeignKey extends Migration
{
    public function up()
    {
        // $this->alterForeignKey('tblExpenses', 'tblExp_tblInv', 'inventoryItemID', 'tblInventory', 'inventoryItemID');
        // $this->alterForeignKey('tblMenuItems', 'tblMnu_tblCat', 'categoryID', 'tblCategory', 'categoryID');
        // $this->alterForeignKey('tblMenuItems', 'tblMnu_tblItm', 'itemPriceID', 'tblItemPrice', 'itemPriceID');
        // $this->alterForeignKey('tblItemPrice', 'tblItm_tblMnu', 'menuItemID', 'tblMenuItems', 'menuItemID');
        // $this->alterForeignKey('tblItemPrice', 'tblItm_tblIpo', 'itemPriceOptionsID', 'tblItemPriceOptions', 'itemPriceOptionsID');
        // $this->alterForeignKey('tblItemPriceOptions', 'tblIpo_tblItm', 'itemPriceID', 'tblItemPrice', 'itemPriceID');
        // $this->alterForeignKey('tblAddons', 'tblAdn_tblMnu', 'menuItemID_menu', 'tblMenuItems', 'menuItemID');
        // $this->alterForeignKey('tblAddons', 'tblAdn_tblMnu2', 'menuItemID_addon', 'tblMenuItems', 'menuItemID');
        // $this->alterForeignKey('tblIngredients', 'tblIng_tblMnu', 'menuItemID', 'tblMenuItems', 'menuItemID');
        // $this->alterForeignKey('tblIngredients', 'tblIng_tblInv', 'inventoryItemID', 'tblInventory', 'inventoryItemID');
        // $this->alterForeignKey('tblIngredientOptions', 'tblIngO_tblIng', 'ingredientsID', 'tblIngredients', 'ingredientsID');
        // $this->alterForeignKey('tblOrderItems', 'tblOrdi_tblMnu', 'menuItemID', 'tblMenuItems', 'menuItemID');
        // $this->alterForeignKey('tblOrderItems', 'tblOrdi_tblOrt', 'orderTypeID', 'tblOrderType', 'orderTypeID');
        // $this->alterForeignKey('tblOrderItems', 'tblOrdi_tblItm', 'itemPriceID', 'tblItemPrice', 'itemPriceID');
        // $this->alterForeignKey('tblOrderItems', 'tblOrdi_tblPym', 'paymentTypeID', 'tblPaymentTypes', 'paymentTypeID');
        // $this->alterForeignKey('tblOrderItems', 'tblOrdi_tblOpt', 'optionID', 'tblOptions', 'optionID');
        // $this->alterForeignKey('tblOrderItems', 'tblOrdi_tblOrd', 'orderID', 'tblOrder', 'orderID');
        // $this->alterForeignKey('tblOrderTimeline', 'tblAdn_menuItemID', 'menuItemID', 'tblMenuItems', 'menuItemID');
        $this->alterForeignKey('tblOrderTimeline', 'tblAdn_orderId', 'orderID', 'tblOrder', 'orderID');
    }

    public function down()
    {
        $this->dropForeignKey('tblExpenses', 'tblExp_tblInv');
        $this->dropForeignKey('tblMenuItems', 'tblMnu_tblCat');
        $this->dropForeignKey('tblMenuItems', 'tblMnu_tblItm');
        $this->dropForeignKey('tblItemPrice', 'tblItm_tblMnu');
        $this->dropForeignKey('tblItemPrice',  'tblItm_tblIpo');
        $this->dropForeignKey('tblItemPriceOptions', 'tblIpo_tblItm');
        $this->dropForeignKey('tblAddons', 'tblAdn_tblMnu');
        $this->dropForeignKey('tblAddons', 'tblAdn_tblMnu2');
        $this->dropForeignKey('tblIngredients', 'tblIng_tblMnu');
        $this->dropForeignKey('tblIngredients', 'tblIng_tblInv');
        $this->dropForeignKey('tblIngredientOptions', 'tblIngO_tblIng');
        $this->dropForeignKey('tblOrderItems', 'tblOrdi_tblMnu');
        $this->dropForeignKey('tblOrderItems', 'tblOrdi_tblOrt');
        $this->dropForeignKey('tblOrderItems', 'tblOrdi_tblItm');
        $this->dropForeignKey('tblOrderItems', 'tblOrdi_tblPym');
        $this->dropForeignKey('tblOrderItems', 'tblOrdi_tblOpt');
        $this->dropForeignKey('tblOrderItems', 'tblOrdi_tblOrd');
    }

    private function alterForeignKey($table, $foreignKeyName, $columnName, $referencedTable, $referencedColumn)
    {
        $this->db->query("ALTER TABLE {$table} ADD CONSTRAINT {$foreignKeyName} FOREIGN KEY ({$columnName}) REFERENCES {$referencedTable}(${referencedColumn})");
    }

    private function dropForeignKey($table, $foreignKeyName)
    {
        $this->db->query("ALTER TABLE {$table} DROP FOREIGN KEY {$foreignKeyName}");
    }
}
