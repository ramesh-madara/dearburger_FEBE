<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class CreateTblInventory extends Migration
{
    public function up()
    {
        $this->forge->addField([
            'inventoryItemID' => [
                'type'           => 'CHAR',
                'constraint'     => 5,
            ],
            'itemName' => [
                'type'       => 'VARCHAR',
                'constraint' => 100,
            ],
            'inventoryItemCategoryId' => [
                'type'       => 'VARCHAR',
                'constraint' => 50,
            ],
            'qty' => [
                'type' => 'INT',
                'null' => true,
            ],
            'sku' => [
                'type' => 'CHAR',
                'null' => true,
            ],

        ]);
        $this->forge->addKey('inventoryItemID', true);
        $this->forge->createTable('tblInventory');
    }

    public function down()
    {
        $this->forge->dropTable('tblInventory');
    }
}
