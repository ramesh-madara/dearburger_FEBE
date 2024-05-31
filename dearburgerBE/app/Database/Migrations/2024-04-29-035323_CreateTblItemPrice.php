<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class CreateTblItemPrice extends Migration
{
    public function up()
    {
        $this->forge->addField([
            'itemPriceID' => [
                'type'           => 'CHAR',
                'constraint'     => 5,
            ],
            'menuItemID' => [
                'type'       => 'CHAR',
                'constraint' => 5,
            ],
            'itemPriceOptionsID' => [
                'type' => 'CHAR',
                'constraint' => 5,
            ],
            'itemPrice' => [
                'type'       => 'DECIMAL',
                'constraint' => '10,2',
            ],
            'itemPriceStartDate' => [
                'type'       => 'DATE',
                'null' => false
            ],
            'itemPriceEndDate' => [
                'type'       => 'DATE'
            ],
        ]);
        $this->forge->addKey('itemPriceID', true);
        $this->forge->createTable('tblItemPrice');
    }

    public function down()
    {
        $this->forge->dropTable('tblItemPrice');
    }
}
