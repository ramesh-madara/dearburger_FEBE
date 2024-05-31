<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class CreateTblInventoryItemCategories extends Migration
{
    public function up()
    {
        $this->forge->addField([
            'inventoryItemCategoryId' => [
                'type'           => 'INT',
                'constraint'     => 11,
                'auto_increment' => TRUE,
            ],
            'inventoryItemCategoryName' => [
                'type'           => 'CHAR',
                'constraint'     => 50,
            ],


        ]);
        $this->forge->addKey('inventoryItemCategoryId', true);
        $this->forge->createTable('tblInventoryItemCategories');
    }

    public function down()
    {
        $this->forge->dropTable('tblInventoryItemCategories');
    }
}
