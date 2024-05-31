<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class CreateTblOrder extends Migration
{
    public function up()
    {
        $this->forge->addField([
            'orderID' => [
                'type'           => 'INT',
                'auto_increment' => true,
            ],
            'orderStatus' => [
                'type'           => 'VARCHAR',
                'constraint'     => 20,
            ],
            'orderDatetime' => [
                'type'           => 'DATETIME',
            ],
        ]);

        $this->forge->addKey('orderID', true);
        $this->forge->createTable('tblOrder');
    }

    public function down()
    {
        $this->forge->dropTable('tblOrder');
    }
}
