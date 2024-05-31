<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class CreateTblOrderItems extends Migration
{
    public function up()
    {
        $this->forge->addField([
            'orderID' => [
                'type'           => 'INT',
            ],
            'menuItemID' => [
                'type'       => 'CHAR',
                'constraint' => 5,
            ],
            'orderTypeID' => [
                'type' => 'CHAR',
                'constraint' => 5,
            ],
            'orderQty' => [
                'type' => 'INT',
            ],
            'itemPriceID' => [
                'type'           => 'CHAR',
                'constraint'     => 5,
            ],
            'paymentTypeID' => [
                'type'           => 'CHAR',
                'constraint'     => 5,
            ],
            'optionID' => [
                'type'           => 'INT',
            ],
        ]);

        $this->forge->addKey('orderID', true);
        $this->forge->createTable('tblOrderItems');
    }

    public function down()
    {
        $this->forge->dropTable('tblOrderItems');
    }
}
