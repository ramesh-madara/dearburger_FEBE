<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class CreateTblItemPriceOptions extends Migration
{
    public function up()
    {
        $this->forge->addField([
            'itemPriceOptionsID' => [
                'type'           => 'CHAR',
                'constraint'     => 5,
            ],
            'itemPriceID' => [
                'type' => 'CHAR',
                'constraint' => 5,
            ],
            'PriceVariation' => [
                'type'       => 'DECIMAL',
                'constraint' => '10,2',
            ]
        ]);
        $this->forge->addKey('itemPriceOptionsID', true);
        $this->forge->createTable('tblItemPriceOptions');
    }

    public function down()
    {
        $this->forge->dropTable('tblItemPriceOptions');
    }
}
