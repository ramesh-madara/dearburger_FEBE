<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class CreateTblMenuItemOptions extends Migration
{
    public function up()
    {
        $this->forge->addField([
            'menuItemOptionID' => [
                'type'           => 'CHAR',
                'constraint'     => 5,
            ],
            'menuItemOptionName' => [
                'type' => 'VARCHAR',
                'constraint' => 50,
            ],
            'menuItemOptionFeatured' => [
                'type' => 'TINYINT',
                'constraint' => 1,
                'default' => 0,
            ]
        ]);
        $this->forge->addKey('menuItemOptionID', true);
        $this->forge->createTable('tblMenuItemOptions');
    }

    public function down()
    {
        $this->forge->dropTable('tblMenuItemOptions');
    }
}
