<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class CreateTblExpenses extends Migration
{
    public function up()
    {
        $this->forge->addField([
            'entryID' => [
                'type'           => 'INT',
                'constraint'     => 11,
                'auto_increment' => TRUE,
            ],
            'inventoryItemID' => [
                'type'           => 'CHAR',
                'constraint'     => 5,
            ],
            'qty' => [
                'type'       => 'INT',
                'constraint' => 100,
            ],
            'price' => [
                'type'       => 'DECIMAL',
                'constraint' => '10,2',
            ],
            'description' => [
                'type'       => 'TEXT',
            ],
            'date' => [
                'type' => 'DATE'
            ],

        ]);
        $this->forge->addKey('entryID', true);
        $this->forge->createTable('tblExpenses');
    }

    public function down()
    {
        $this->forge->dropTable('tblExpenses');
    }
}
