<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class CreateTblOrderTimeline extends Migration
{
    public function up()
    {

        $this->forge->addField([
            'id' => [
                'type'       => 'INT',
                'constraint' => 5,
                'auto_increment' => true,
            ],
            'orderID' => [
                'type' => 'int',
                'constraint' => 10,
            ],
            'menuItemID' => [
                'type'       => 'int',
                'constraint' => 100,
            ],
            'action' => [
                'type'       => 'VARCHAR',
                'constraint' => 10,
            ],
            'kot_issued' => [
                'type' => 'BOOLEAN',
                'default' => false,
            ],

        ]);
        $this->forge->addKey('id', true);
        $this->forge->addPrimaryKey('id');
        $this->forge->createTable('tblOrderTimeline');
    }

    public function down()
    {
        $this->forge->dropTable('tblOrderTimeline');
    }
}
