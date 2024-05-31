<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class CreateTblOrderType extends Migration
{
    public function up()
    {
        $this->forge->addField([
            'orderTypeID' => [
                'type' => 'CHAR',
                'constraint' => 5,
            ],
            'orderTypeName' => [
                'type' => 'VARCHAR',
                'constraint' => 50,
            ]
        ]);
        $this->forge->addKey('orderTypeID', true);
        $this->forge->createTable('tblOrderType');
    }

    public function down()
    {
        $this->forge->dropTable('tblOrderType');
    }
}
