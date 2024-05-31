<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class CreateTblAddons extends Migration
{
    public function up()
    {
        $this->forge->addField([
            'addonID' => [
                'type'           => 'INT',
                'auto_increment' => true,
            ],
            'menuItemID_menu' => [
                'type' => 'INT',
                'constraint' => 5,
            ],
            'menuItemID_addon' => [
                'type' => 'INT',
                'constraint' => 5,
            ]
        ]);
        $this->forge->addKey('addonID', true);
        $this->forge->createTable('tblAddons');
    }

    public function down()
    {
        $this->forge->dropTable('tblAddons');
    }
}
