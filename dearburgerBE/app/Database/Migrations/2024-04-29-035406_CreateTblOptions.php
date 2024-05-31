<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class CreateTblOptions extends Migration
{
    public function up()
    {
        $this->forge->addField([
            'optionID' => [
                'type'           => 'INT',
            ],
            'optionName' => [
                'type' => 'VARCHAR',
                'constraint' => 100,
            ]
        ]);
        $this->forge->addKey('optionID', true);
        $this->forge->createTable('tblOptions');
    }

    public function down()
    {
        $this->forge->dropTable('tblOptions');
    }
}
