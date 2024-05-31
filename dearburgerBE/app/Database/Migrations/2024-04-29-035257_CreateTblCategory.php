<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class CreateTblCategory extends Migration
{
    public function up()
    {
        $this->forge->addField([
            'categoryID' => [
                'type'           => 'CHAR',
                'constraint'     => 5,
            ],
            'categoryName' => [
                'type'       => 'VARCHAR',
                'constraint' => 100,
            ],
            'categoryStatus' => [
                'type' => 'TINYINT',
                'constraint' => 1,
                'default' => 0,
            ]
        ]);
        $this->forge->addKey('categoryID', true);
        $this->forge->createTable('tblCategory');
    }

    public function down()
    {
        $this->forge->dropTable('tblCategory');
    }
}
