<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class CreateTblMenuItems extends Migration
{
    public function up()
    {
        $this->forge->addField([
            'categoryID' => [
                'type'           => 'CHAR',
                'constraint'     => 5,
            ],
            'menuItemID' => [
                'type'       => 'INT',
                'constraint' => 5,
                'auto_increment' => true,
            ],
            'menuItemType' => [
                'type' => 'VARCHAR',
                'constraint' => 10,
            ],
            'menuItemName' => [
                'type'       => 'VARCHAR',
                'constraint' => 100,
            ],
            'menuItemDescription' => [
                'type'       => 'VARCHAR',
                'constraint' => 200,
            ],
            'featured' => [
                'type' => 'BOOLEAN',
                'default' => false,
            ],
            'itemPriceID' => [
                'type'       => 'CHAR',
                'constraint' => 5,
            ],
        ]);
        $this->forge->addKey('menuItemID', true);
        $this->forge->addPrimaryKey('menuItemID');
        $this->forge->createTable('tblMenuItems');
    }

    public function down()
    {
        $this->forge->dropTable('tblMenuItems');
    }
}
